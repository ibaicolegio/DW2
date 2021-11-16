<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_index extends CI_Controller {

        function __construct(){
            parent::__construct();            
            $this->load->model('BBDD');
	}
    
	public function index()
	{
                $datos['generos']=$this->BBDD->generosLibros();
                $this->load->view('cabecera',$datos);
                $this->load->view('pie');
	}
        
}
