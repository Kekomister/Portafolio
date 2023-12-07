import { Component } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent {

  proyects: any[] = [
    {
      titulo: "Ecomerce-Juegos", imagen: "../../../assets/Ecomerce.png", objetivo: "Crear un Ecomerce de videojuegos", rol: "Programador Front", vercel: "https://ecomerce-juegos.vercel.app",
      usuario: "Email : 'admin', password : 'admin'",
      proceso: "Primero hicimos un carrousel (girador de imagenes) para el inicio con sus propias imagenes, y luego hicimos un componente aparte para los videojuegos para que sean reutilizados y vistos en varias partes. Luego fuimos por la parte del listado donde podes filtrar los juegos por una categoria. En cualquier lugar que haya un juego, podes ver su info en mas detalle al hacerle click. Aparte le hicimos un buscador para que no tengan que buscar entre todos los juegos, que en este caso no serian muchos pero a lo grande si. Una seccion de contacto porque siempre es necesaria y para comprar, si o si necesitas un usuario que no te lo podes hacer en esta pagina porque en ese momento no sabiamos como."
    },
    {
      titulo: "Ifts6", imagen: "../../../assets/Ifts6.png", objetivo: "Actualizar la pagina de Ifts6 con publicaciones",
      usuario: "Usuario : 'Admin', password : 'administrador', \n Usuario : 'Jorge', password : '1234'", rol: "Programador Back y Front", vercel: "https://ifts6.vercel.app",
      proceso: "Bueno, primero tuvimos que diseñar la base de datos para poder guiarnos en como estaria distribuido. Luego generamos los componentes y paginas respectivas del Ifts6. Despues mis compañeros empezaron a tocar el html mientras yo hacia el back, donde tuve que ver como subir imagenes a la base de datos, desde Nodejs. Una vez terminado eso, hice toda la logica de la pagina admin, que es donde podes publicar, borrar y modificar Usuarios, Sectores y Publicaciones (para verla hay que entrar en ifts6.vercel.app/admin). Se puede entrar a la pagina y ver lo que seria pero no se puede crear nada ya que no supe como subir a vercel el back con el front. Y despues hice la logica de todo lo demas y bastante html. Los estilos fueron mayormente tocados por uno de mis compañeros."
    },
    { titulo: "Proximamente", imagen: "", objetivo: "", rol: "", vercel: "", proceso: "" },
    { titulo: "Proximamente", imagen: "", objetivo: "", rol: "", vercel: "", proceso: "" },
    { titulo: "Proximamente", imagen: "", objetivo: "", rol: "", vercel: "", proceso: "" },
    { titulo: "Proximamente", imagen: "", objetivo: "", rol: "", vercel: "", proceso: "" },
  ];

  proy: any;

  actual(proy: any) {
    if (proy.titulo != "Proximamente") {
      this.proy = proy;
    }
  }

  volver() {
    window.history.back();
  }

}
