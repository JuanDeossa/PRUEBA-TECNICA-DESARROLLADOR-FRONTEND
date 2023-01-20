# PRUEBA-TECNICA-DESARROLLADOR-FRONTEND.

Aplicacion desplegada:
https://juandeossa.github.io/PRUEBA-TECNICA-DESARROLLADOR-FRONTEND/

Tecnologias Utilizadas y sus comandos de istalacion:
  -Desarrollo de la aplicacion: vite js (npm install vite@latest)
  -Despliegue de la aplicacion: gh-pages (npm install gh-pages)
  -Gestion de rutas (HashRoutes SPA): React-router-dom V6 (npm install react-router-dom)
  -Peticiones API REST: Axios (npm install axios)
  -Gestion de formularios: React Hook Form (npm install react-hook-form)
  -Libreria de estilos y componentes UI: Material UI (npm install @mui/material @emotion/react @emotion/styled)
  -Iconos para react: React Icons (npm install react-icons --save)
  
  Organizacion de carpetas:
  
  ![image](https://user-images.githubusercontent.com/110882230/213787805-6bd3e26b-d5b5-4458-aac6-8764431941b3.png)

Páginas:
-HomePage:
  En ella se muestra una grid con los productos traidos de la API (20 en total) y con los productos agregados por el usuarios manualmente en la pagina    llamada crear producto (por defecto no hay productos custom creados). Las acciones que se pueden realizar en esta pagina son agregar cierta cantidad de unidades de cualquier producto al carrito de compras y tambien eliminar los productos custom de la grid principal una vez hayan sido creados.
  
-Carrito:
  en Esta pagina se puede ver de manera general y en detalle cada item agregado al carrito de compras, tambien se pueden eliminar todas las cantidades de un item y siempre se muestra el valor total del carrito en la parte inferior.
  
 -Crear producto:
 En esta página se puede crear mediante un formulario de react hook form, productos custom a los cuales se les asigna un ID unico automaticamente y estos productos se agregan automaticamente a la pgina de home para poder ser agregaos o eliminados del carrito.
    
  
