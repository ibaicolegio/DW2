<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_librosPrestados extends CI_Controller {

        function __construct(){
            parent::__construct();            
            $this->load->model('BBDD');
            $this->load->library('session');
	}
    
	public function libros()
	{
                $this->session->sess_destroy();
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->librosPrestados();
                $datos['idLibro']=null;
                $this->session->unset_userdata('idLibro');
                $this->load->view('cabecera',$datos);
		$this->load->view('v_librosPrestados', $datos);
                $this->load->view('pie');
	}
        
        public function libro()
	{
                if(isset($_POST['librosPrestados'])){
                    $datos['prestamos']=$this->BBDD->prestamos($_POST['librosPrestados']);
                    $this->session->set_userdata('idLibro', $_POST['librosPrestados']);
                }
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->librosPrestados();
                $this->load->view('cabecera',$datos);
                $this->load->view('v_librosPrestados', $datos);
		$this->load->view('v_linksprestamos', $datos);
                $this->load->view('pie');
	}
        
         public function devolver($idPrestamo){
                if($this->session->has_userdata('devoluciones')){
                    $devoluciones=$this->session->userdata('devoluciones');
                    if(!(in_array($idPrestamo, $devoluciones))){
                        array_push($devoluciones, $idPrestamo);
                    }
                    $this->session->set_userdata('devoluciones', $devoluciones);
                } else {
                    $devoluciones=array();
                    array_push($devoluciones, $idPrestamo);
                    $this->session->set_userdata('devoluciones', $devoluciones);
                }
                $datos['prestamos']=$this->BBDD->prestamos($this->session->userdata('idLibro'));
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->librosPrestados();
                $this->load->view('cabecera',$datos);
                $this->load->view('v_librosPrestados', $datos);
		$this->load->view('v_linksprestamos', $datos);
                $this->load->view('pie');
         }
       
         public function grabarDevoluciones(){
                $cant=0;
                if($this->session->has_userdata('devoluciones')){
                    foreach ($this->session->userdata('devoluciones') as $value) {
                        $this->BBDD->grabarDevolucion($value);
                        $cant++;
                    }
                }
                $datos['cantidad']=$cant;
                $datos['generos']=$this->BBDD->generosLibros();
                $datos['libros']=$this->BBDD->librosPrestados();
                $this->session->unset_userdata('devoluciones');
                $this->load->view('cabecera',$datos);
                $this->load->view('v_librosPrestados', $datos);
                $this->load->view('v_linksprestamos', $datos);
                $this->load->view('pie');
         }
        
}

