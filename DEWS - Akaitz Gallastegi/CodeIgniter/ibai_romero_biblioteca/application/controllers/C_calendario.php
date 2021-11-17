<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_calendario extends CI_Controller {

        function __construct(){
            parent::__construct();            
            $this->load->model('BBDD');
            $this->load->library('calendar');
	}
    
	public function calendario()
	{
                $dias=[];
                $diasPrestamos=$this->BBDD->diasPrestamos();
                foreach ($diasPrestamos as $value) {
                    $dia=$value->dia;
                    $texto=site_url()."/C_calendario/calendarioDia/".$dia;
                    $dias[$dia] = $texto;
                }
                
                $datos['dias']=$dias;
                $datos['generos']=$this->BBDD->generosLibros();
                $this->load->view('cabecera',$datos);
		$this->load->view('v_calendario',$datos);
                $this->load->view('pie');
	}
        
        public function calendarioDia($diaMes)
	{
                $dias=[];
                $diasPrestamos=$this->BBDD->diasPrestamos();
                foreach ($diasPrestamos as $value) {
                    $dia=$value->dia;
                    $texto=site_url()."/C_calendario/calendarioDia/".$dia;
                    $dias[$dia] = $texto;
                }
                $datos['dia']=$diaMes;
                $datos['titulos']=$this->BBDD->prestamosDia($diaMes);
                $datos['dias']=$dias;
                $datos['generos']=$this->BBDD->generosLibros();
                $this->load->view('cabecera',$datos);
		$this->load->view('v_calendario',$datos);
                $this->load->view('pie');
	}
       
        
}