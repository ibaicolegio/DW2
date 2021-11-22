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
        $rs=$this->db->query("select * from prestamos where idlibro=$idlibro");
        return $rs->num_rows();
  }
  
  function prestamos($idlibro){
        $rs=$this->db->query("select * from prestamos where idlibro=$idlibro");
        return $rs->result();
  }
  
  function prestar($idlibro){
        $rs=$this->db->query("INSERT INTO prestamos (idlibro, fecha) VALUES ($idlibro, CURDATE())");
  }
  
  function tituloLibro($idLibro){
        $rs=$this->db->query("select titulo from libros where idlibro=$idLibro");
        return $rs->result();
  }
  
  function librosPrestados(){
        $rs=$this->db->query("select DISTINCT titulo, l.idlibro idlibro from libros l, prestamos p where l.idlibro=p.idlibro");
        return $rs->result();
  }
  
  function grabarDevolucion($idprestamo){
        $this->db->query("DELETE FROM prestamos WHERE idprestamo=$idprestamo");
  }
  
  function diasPrestamos(){
        $rs=$this->db->query("select DISTINCT DAYOFMONTH(fecha) dia FROM prestamos WHERE MONTH(fecha) = MONTH(CURRENT_DATE())");
        return $rs->result();
  }
  
  function prestamosDia($dia){
        $rs=$this->db->query("select DISTINCT titulo FROM prestamos p, libros l WHERE MONTH(fecha) = MONTH(CURRENT_DATE()) and DAYOFMONTH(fecha) = $dia and l.idlibro=p.idlibro");
        return $rs->result();
  }
  
}
?>

