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
                    foreach ($_POST['prestado'] as $value) {
                        if(ejemplares_prestados($idlibro)<=4){
                            echo $idlibro;
                        }
                    }
                }
                $datos['genero']=$genero;
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->libros_y_autores($genero);
                $this->load->view('cabecera',$datos);
		$this->load->view('index');
                $this->load->view('v_prestamos', $datos);
                $this->load->view('pie');
	}
       
        
}