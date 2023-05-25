

//função gerarReceita envia os elementos do fomulário para o layout que será impresso

function gerarReceita(){
    document.getElementById('NomePrint').innerHTML=document.getElementById('paciente').value;
  document.getElementById('ConvPrint').innerHTML=document.getElementById('select').value;
  document.getElementById('printMedico').innerHTML=document.getElementById('medico').value;
  document.getElementById('CrmPrint').innerHTML=document.getElementById('crm').value;
  document.getElementById('DrPrint').innerHTML=document.getElementById('medico').value;
  document.getElementById('CpfPrint').innerHTML=document.getElementById('cpf').value;
  document.getElementById('prescPrint').innerHTML=document.getElementById('textarea').value;
  document.getElementById('printData').innerHTML = dataAtual();
}
//função que gera a data atual p/ ser enviada para o layout de impressão.

  function dataAtual(){
  let data = new Date();
  return data.getDate() + "/" +(data.getMonth()+1)+ "/"+ data.getFullYear();
}

//função de inicialização do jQuery e fução de criação dos eventos
 
$(document).ready(function(){

  $( "form" ).on( "submit", function( event ) {
  gerarReceita();
  window.print();
  $('form').trigger("reset");  

} );
  //menssagem de validação 

$(document).ready(function(){
  $("form").submit(function(){
   alert("Ação Concluída");

  });

});


  });




