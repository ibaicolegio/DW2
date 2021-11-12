<?php
class BBDD extends CI_Model{
  
  function __construct(){
    parent::__construct();
  }   

  function generosLibros(){
        $rs=$this->db->query("select genero from libros group by genero");
        return $rs->result();
  }
  
  function libros_y_autores($genero){
        $rs=$this->db->query("select idlibro, titulo, nombre from libros l, autores a where l.idautor=a.idautor and genero='$genero'");
        return $rs->result_array();
  }
  
  function ejemplares_prestados($idlibro){
        $rs=$this->db->query("select idlibro from libros where idautor=idautor");
        return $rs->num_rows();
  }
    
}
?>

