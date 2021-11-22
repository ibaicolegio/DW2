<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_genero extends CI_Controller {

        function __construct(){
            parent::__construct();            
            $this->load->model('BBDD');
	}
    
	public function genero($genero)
	{
                $datos['genero']=$genero;
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->libros_y_autores($genero);
                $this->load->view('cabecera',$datos);
		$this->load->view('index');
                $this->load->view('pie');
	}
       
        
}
