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
  
  ![image](https://user-images.githubusercontent.com/110882230/213790711-40971e6c-9f1d-47a8-be1f-81e0b36ab60e.png)

  
-Carrito:
  en Esta pagina se puede ver de manera general y en detalle cada item agregado al carrito de compras, tambien se pueden eliminar todas las cantidades de un item y siempre se muestra el valor total del carrito en la parte inferior.
  
  ![image](https://user-images.githubusercontent.com/110882230/213790821-5e6b8b73-6d71-4ede-9cac-7310ce11a455.png)
  
  ![image](https://user-images.githubusercontent.com/110882230/213790896-031de091-5ddf-400f-a022-47b03907d640.png)

  
 -Crear producto:
 En esta página se puede crear mediante un formulario de react hook form, productos custom a los cuales se les asigna un ID unico automaticamente y estos productos se agregan automaticamente a la pgina de home para poder ser agregaos o eliminados del carrito.
    
  ![image](https://user-images.githubusercontent.com/110882230/213791009-0ca2f79b-c48d-4843-91e7-881237e7f131.png)

