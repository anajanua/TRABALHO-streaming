
create database streaming_filmes;
create database streaming_usuarios;
create database streaming_cartao;
create database streaming_servidor;
create database streaming_chat;
create database streaming_planos;

use streaming_filmes;

create table filmes(
	idFilme int not null auto_increment primary key,
    nomeFilme varchar(50),
    classificacaoFilme int,
    dataLancamento date,
    generoFilme varchar(100),
    linkFilme varchar(255),
    gosteiFilme int,
    naoGosteiFilme int,
    sinopse varchar(255),
    dententores varchar(150), 
    elenco varchar(150),
    foto blob,
    trailer blob
);

use streaming_usuarios;

create table usuarios(
	idUsuarios int not null auto_increment primary key,
    nomeUsuario varchar(50),
    emailUsuario varchar(60),
    senhaUsuario varchar(20),
    fotoUsuario blob,
    historicoUsuario varchar (100),
    cartoesUsario varchar(50),
    planoUsuario tinyint,
    venciUsuario date
    );

use streaming_planos;

create table planos(
	idPlanos int not null auto_increment primary key, 
    nomePlano varchar(20),
    quantidadeAssinantes int,
    beneficioPlanos varchar(255),
    periodo varchar(10)
);

use streaming_cartao;

 create table cartao(
 idCartao int not null auto_increment primary key,
 numCartao int(16),
 bandeiraCartao varchar(40),
 cvvCartao int(3),
 validadeCartao date,
 cpf varchar(12),
 nomeCartao varchar(50),
 cep int,
 telCartao int
 );  
 
 use streaming_servidor;
 
 create table servidor(
 idServidor int not null auto_increment primary key,
 nomeServidor varchar(100),
 filmeServidor varchar(50),
 integServidor varchar(100),
 tempoServidor time,
 privServidor varchar(60),
 caminhoServidor varchar(255)
 );
 
use streaming_chat; 
 
 create table chat(
    idChat int not null auto_increment primary key,
    mensagem varchar(500),
    usuario varchar(50) 
 );
