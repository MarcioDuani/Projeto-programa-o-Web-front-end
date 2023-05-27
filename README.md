# Projeto-programa-Web-front-end
 Imprimir receituário médico
 
 DISCIPLINA: PROGRAMAÇÃO WEB FRONT END 
PROFESSOR TUTOR: Anderson
ALUNO: Márcio Duani do N. Mendes
MATRÍCULA: 2022200307
CURSO: Análise e Desenvolvimento de Software Multiplataforma


 PROJETO – PROGRAMAÇÃO WEB FRONT END
Proposta

SIMPLE MEDICAL SYSTEM – desenvolva uma aplicação para a geração de receituário médico de utilização de medicamentos. Normalmente quando estamos sendo atendidos por um médico, ou outro profissional da saúde, há um momento em que o médico receita alguns medicamentos que devem ser tomados pelo paciente para que a enfermidade que ele está possa ser curada.
A nossa aplicação, nesta situação acadêmica, será composta pelas tecnologias WEB BOOTSTRAP e JQUERY e objetivará demonstrar que os conceitos apresentados nos temas desta primeira etapa da disciplina podem ser usados no mercado

Apresentação: 
Na tela inicial foi criado um formulário com uma apresentação simples e intuitiva para que seja de fácil entendimento e preenchimento, o objetivo é que o usuário que neste caso será um Médico possa preencher os dados de forma dinâmica e rápida.

Tela principal do sistema Receituário Médico:
<div>
 <img src="https://github.com/MarcioDuani/Projeto-programa-o-Web-front-end/assets/101338708/be1fb883-3492-42f1-9356-29e9bcea4657"/>
 </div>
 
Os campos escolhidos foram baseados nas informações mais relevantes para esse tipo de documento, contendo as identificações do paciente da clínica e do médico, mas seria bem simples incluir novos campos caso fosse necessário:
Nome do Paciente, CPF , Clínica Médica, Especialista responsável, CRM e Prescrição. O campo Data não aparece para digitação otimizando o preenchimento do formulário, o mesmo será introduzido de forma automática pelo sistema no momento da impressão atualizado sempre com a data atual.
Preenchendo os dados:
Todos os campos são de preenchimentos obrigatórios, aparecerá uma mensagem de advertência ao usuário caso ele tente imprimir com qualquer um dos campos em branco.

Tela com advertência:

<div>
 <img src="![Imagem1](https://github.com/MarcioDuani/Projeto-programa-o-Web-front-end/assets/101338708/be1fb883-3492-42f1-9356-29e9bcea4657)"/>
 </div>
 
Os campos CPF e CRM só podem ser preenchidos por números, ambos são configurados com máscaras que completam de forma automática os caracteres especiais e limitam o número de caracteres.
O Campo Clínica Médica, tem um “select” com as opções das Unimed, Intermédica, Amil Saúde e Consulta Particular, essas foram incluídas como ex. porém podem ser alteradas facilmente caso necessário para adaptação ao cliente.
Usando o select:
 
Após todos os campos estarem devidamente preenchido é hora de gerar a Receita Médica clicando no botão Imprimir.

Tela com preenchimento completo:

<div>
 <img src="![Imagem1](https://github.com/MarcioDuani/Projeto-programa-o-Web-front-end/assets/101338708/be1fb883-3492-42f1-9356-29e9bcea4657)"/>
 </div>
 
Após clicar em imprimir vai abrir a tela de impressão do Windows e aparecerá o Layout de impressão sendo possível identificar como ficará sua receita médica.
 Layout da Receita Médica que será Impressa:
 
 <div>
 <img src="![Imagem1](https://github.com/MarcioDuani/Projeto-programa-o-Web-front-end/assets/101338708/be1fb883-3492-42f1-9356-29e9bcea4657)"/>
 </div>
 
Conclusão:
A aplicação foi toda desenvolvida para funcionar somente com recursos do Front-end., para o desenvolvimento do layout das páginas e validações do formulário foi utilizado Web Bootstrap, CSS e HTML5, para criações dos eventos , funções e movimentação de dados entre as variáveis JavaScript , funções e máscaras do formulário biblioteca jQuery

 
 
