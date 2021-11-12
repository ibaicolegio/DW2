<?php
class BBDD extends CI_Model{
  
  function __construct(){
    parent::__construct();
  }   

  function generosLibros(){
        $rs=$this->db->query("select genero from libros group by genero");
        return $rs->result();
  }
    
}
?>

