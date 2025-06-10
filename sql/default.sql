CREATE DATABASE IF NOT EXISTS cihp_db;

use cihp_db;

create table Voluntarios(
	voluntario_id INT AUTO_INCREMENT PRIMARY KEY,
    voluntario_name VARCHAR(150),
    voluntario_email VARCHAR(150) UNIQUE not null,
    voluntario_key VARCHAR(30),
    voluntario_photo varchar(255) default 'uploads/profileDefault.png',
    nascimento date,
    genero varchar(50),
    cpf char(11),
    pontos int default 0
);

create table Instituicoes(
	id_instituicao int primary key auto_increment,
    nome varchar(255) not null,
    cnpj char(14) not null, 
    email varchar(255) unique  not null,
    senha varchar(255) not null,
    tipo varchar(11) not null 
);

create table vagas(
	id_vaga int primary key auto_increment,
    titulo varchar(200) not null,
    descricao longtext not null,
    categoria varchar(200) not null,
    localidade varchar(255) not null,
    image varchar(255) not null,
    total_de_vagas int not null,
    vagas_disponiveis int not null,
    instituicao_organizadora int not null,
    instituicao_bonificadora int default 0,
    situacao varchar(12) default 'em andamento',
    data_inicio datetime not null,
    data_conclusao datetime default null,
	valor_pontuacao int not null,
    foreign key(instituicao_id) references Instituicoes(id_instituicao)
);

create table Inscricoes(
	id_inscricao int primary key auto_increment,
    id_voluntario int not null,
    vaga_id int not null,
    data_inscricao datetime not null,
    foreign key(id_voluntario) references Voluntarios(voluntario_id),
    foreign key(vaga_id) references Vagas(id_vaga)
);

create table Premios(
	id_premio int primary key auto_increment,
    nome varchar(100) not null,
    descricao text not null,
    vaga_id int not null,
    instituicao_id int not null,
    custo_em_ponto int not null,
    foreign key(vaga_id) references Vagas(id_vaga),
    foreign key(instituicao_id) references Instituicoes(id_instituicao)
);

Delimiter //

create trigger calc_vagas_disp
after insert on Inscricoes 
for each row 
begin
	update vagas set vagas_disponiveis = vagas_disponiveis - 1 where id_vaga = new.vaga_id; 
end;

//

delimiter ;
