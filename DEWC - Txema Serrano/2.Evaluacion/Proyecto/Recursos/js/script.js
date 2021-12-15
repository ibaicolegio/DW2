$(function() {
    load(1);
});


// Llamar funcion carga
// Funcion load: carga formulario con la data que se obtiene de llamar "listar_terceros.php"

function load() {
    const query = $("#q").val();
    const parametros = { "action": "ajax", 'query': query };
    $("#loader").fadeIn('slow');
    $.ajax({
        url: 'ajax/listar_terceros.php',
        data: parametros,
        beforeSend: function(objeto) {
            $("#loader").html("Cargando...");
        },
        success: function(data) {
            $(".outer_div").html(data).fadeIn('slow');
            $("#loader").html("");
        }
    })
}

// Funcion edit: obtiene los datos del formulario

$('#editProductModal').on('show.bs.modal', function(event) {

    const button = $(event.relatedTarget); // // Botón modal


    const id = button.data('id');
    $('#edit_id').val(id);

    const name = button.data('name');
    $('#edit_name').val(name);
    const lastname = button.data('lastname');
    $('#edit_lastname').val(lastname);
    const address = button.data('address');
    $('#edit_address').val(address);
    const phone = button.data('phone');
    $('#edit_phone').val(phone);
    const email = button.data('email');
    $('#edit_email').val(email)
});

$('#deleteProductModal').on('show.bs.modal', function(event) {
    const button = $(event.relatedTarget); // Botón modal
    const id = button.data('id');
    $('#delete_id').val(id)
});

// Funcion edit_product: llama a editar_tercero.php
// actualiza los datos

$("#edit_product").submit(function(event) {
    const parametros = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "ajax/editar_tercero.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#resultados").html("Enviando...");
        },
        success: function(datos) {
            $("#resultados").html(datos);
            load();
            $('#editProductModal').modal('hide');
        }
    });
    event.preventDefault();
});

// Funcion add_product: llama a guardar_tercero.php
// Agrega un registro a la base de datos

$("#add_product").submit(function(event) {
    const parametros = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "ajax/guardar_tercero.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#resultados").html("Enviando...");
        },
        success: function(datos) {
            $("#resultados").html(datos);
            load();
            $('#addProductModal').modal('hide');
        }
    });
    event.preventDefault();
});

// Funcion delete_product: llama a eliminar_tercero.php
// Elimina un registro a la base de datos

$("#delete_product").submit(function(event) {
    const parametros = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "ajax/eliminar_tercero.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#resultados").html("Enviando...");
        },
        success: function(datos) {
            $("#resultados").html(datos);
            load();
            $('#deleteProductModal').modal('hide');
        }
    });
    event.preventDefault();
});