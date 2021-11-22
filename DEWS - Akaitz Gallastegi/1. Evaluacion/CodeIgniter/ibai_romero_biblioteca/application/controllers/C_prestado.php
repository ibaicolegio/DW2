<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_prestado extends CI_Controller {

        function __construct(){
            parent::__construct();            
            $this->load->model('BBDD');
	}
    
	public function prestado($genero)
	{
                if(isset($_POST['enviar'])){
                    $datos['prestado']=array();
                    $datos['noPrestado']=array();
                    foreach ($_POST['prestado'] as $value) {
                        $titulo=$this->BBDD->tituloLibro($value);
                        $titulo=$titulo[0]->titulo;
                        if(($this->BBDD->ejemplares_prestados($value))<4){
                            $this->BBDD->prestar($value);
                            array_push($datos['prestado'],$titulo);
                        } else {
                            array_push($datos['noPrestado'],$titulo);
                        }
                    }
                }
                $datos['genero']=$genero;
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->libros_y_autores($genero);
                $this->load->view('cabecera',$datos);
		$this->load->view('index');
                $this->load->view('v_prestamos',$datos);
                $this->load->view('pie');
	}
       
        
}