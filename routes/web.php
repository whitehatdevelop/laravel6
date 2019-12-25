<?php
use App\Producto;
use App\Categoria;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    //Para añadir producto, solo ingresar valores , guardar y recargar url de php artisan serve
    /*$prod= new Producto();
    
    $prod->nombre = 'Producto 3';
    $prod->slug = 'Producto 3';
    $prod->categoria_id = 2;
    $prod->descripcion_corta= 'Producto';
    $prod->descripcion_larga = 'Producto';
    $prod->especificaciones = 'Producto';
    $prod->datos_de_interes = 'Producto';
    $prod->estado = 'Nuevo';
    $prod->activo = 'Si';
    $prod->sliderprincipal = 'No';
    $prod->save();
    return $prod;*/

    //return view('welcome');

    //Consultas 
    //Obtener producto
    /*$prod = Producto::find(3)->categoria;
    return $prod;*/
    //Obtener productos por categoria
    /*$prod = Categoria::find(1)->productos;
    return $prod;*/
    return view('tienda.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
