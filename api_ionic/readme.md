# Passos para rodar a api

# Clone o projeto para sua máquina
   git clone https://github.com/cbcarlos07/Curso-de-Ionic.git

# Dentro da pasta **Curso-de-Ionic** tem a pasta **api_ionic** acesse a pasta pelo terminal

# Crie um banco de dados chamado **beers**

# Dentro do projeto, duplique o arquivo **.env.example** e renomeie para **.env** 

# Dentro do arquivo **.env** substituia as seguintes linhas para a sua realidade
      
      DB_DATABASE=beers
      DB_USERNAME=seu_banco 
      DB_PASSWORD=sua_senha

      o bando foi feito para mysql

# Para configurar o projeto inicial, rode o seguinte comando:
      composer install

# No terminal, dentro do projeto **api_ionic** rode o seguinte comando para criar as tabelas:
      php artisan migrate

# Para inserir automaticamente os dados no banco de dados rode o seguinte comando:
      php artisan db:seed

# Para executar o projeto, rode o seguinte comando:
      php artisan serve
      
      Irá gerar a seguinte informação 
      Laravel development server started: <http://127.0.0.1:8000>
      Use a url informada no seu projeto

# Caso dê o seguinte problema `No application encryption key has been specified.`, rode o seguinte comando e reinicie o projeto como o `php artisan serve`:
      php artisan key:generate


