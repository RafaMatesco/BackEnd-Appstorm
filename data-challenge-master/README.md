# Processo Seletivo Desenvolvedor Full-Stack


----------


### Desafio Técnico
A equipe de produtos tem recebido feedbacks da equipe comercial e eles dizem que alguns clientes do setor de alimentação (restaurantes, pizzarias, bares, etc.) estão procurando soluções que os ajudem a entender melhor seus concorrentes. Eles gostariam de saber qual é a faixa de preço praticada pelos concorrentes, como é o fluxo de pessoas nesses locais, qual é a população e a densidade demográfica dos bairros onde os concorrentes estão, e etc.

----------

### Dados

Os dados que você utilizará para desenvolver o desafio podem ser acessados em:

```bash
bairros.csv
concorrentes.csv
eventos_de_fluxo.csv.gz
populacao.json
```


### Descrição dos dados


**eventos_de_fluxo.csv.gz:** contém os dados do fluxo de pessoas. São eventos dos celulares de pessoas que permanecem mais de 5 minutos em um estabelecimento comercial.
Esses dados são enviados diariamente para a area. Este arquivo possui uma pequena amostra dos dados.


*Campo*                 | *Descrição*
---------------------   | -----------------
*CODIGO*                | *Código do evento*
*DATETIME*              | *Data e hora do evento*
*CODIGO_CONCORRENTE*    | *Código do concorrente*

</br>


**populacao.json:** contém a quantidade de habitantes por bairro. 


*Campo*                 | *Descrição*
---------------------   | -----------------
*CODIGO*                | *Código do bairro*
*POPULACAO*             | *Quantidade de habitantes*


</br>


**bairros.csv:** contém as informações dos bairros.


*Campo*        | *Descrição*
-------------  | -----------------
*CODIGO*       | *Código do bairro*
*NOME*         | *Nome do bairro*
*MUNICIPIO*    | *Cidade*
*UF*    	   | *Estado*
*AREA*    	   | *Área do bairro em km²*

</br>

**concorrentes.csv:** contém os dados de concorrentes. 


*Campo*         | *Descrição*
-------------   | -----------------
*CODIGO*        | *Código do concorrente*
*NOME*          | *Nome do concorrente*
*CATEGORIA*     | *Atividade econômica*
*FAIXA_PRECO*   | *Faixa de preço praticada*
*ENDERECO*      | *Endereço*
*MUNICIPIO*     | *Cidade*
*UF*    	    | *Estado*
*CODIGO_BAIRRO* | *Bairro*

</br>


----------

### Objetivo

Atualmente um dos nossos desafios é criar serviços de dados escaláveis, otimizados para o armazenamento e para o acesso aos dados.

Nossos Analistas examinaram os dados de fluxo de pessoas e concluíram que a melhor forma de apresentar essa informação seria segmentando o fluxo por dias da semana e períodos do dia (manhã, tarde e noite), ou seja, os clientes precisam saber quantas pessoas em média frequentam seus concorrentes em cada dia da semana e em cada período do dia. Para encontrar fluxo médio de pessoas é preciso considerar os eventos dos mesmos dias da semana e dos mesmos períodos do dia.

A densidade demográfica de um bairro é uma informação muito importante para nossos clientes e é uma informação que precisa ser calculada. A densidade demográfica de um bairro é o resultado da  divisão da população do bairro pela área do bairro.

----------

### Entrega

Com o conhecimento sobre os dados que você irá trabalhar e regras mencionadas, agora você precisa construir uma aplicação que calcule e apresente as informações dos concorrentes como código, nome, endereço, preço praticado, fluxo médio de pessoas por dia da semana e por período do dia, bairro e a população e a densidade demográfica do bairro.

##### Exemplo de saída:

```
{
   "cod_concorrente":"247437008633513",
   "nome_concorrente":"Porto da Pizza",
   "endereço":"Av Campos Salles, 751",
   "preco_praticado":"50,00",
   "fluxo_medio":{
      "segunda-feira":{
         "manhã":"3",
         "tarde":"5.5",
         "noite":"10"
         },
       "terça-feira":{
         "manhã":"1",
         "tarde":"9.67",
         "noite":"4"
         },
       "quarta-feira":{
         "manhã":"5",
         "tarde":"12",
         "noite":"22"
         },
       "quinta-feira":{
         "manhã":"3",
         "tarde":"9",
         "noite":"24"
         },
       "sexta-feira":{
         "manhã":"3",
         "tarde":"6",
         "noite":"28"
         },
       "sábado":{
         "manhã":"15.6",
         "tarde":"45.78",
         "noite":"100.5"
         },
       "domingo":{
         "manhã":"5",
         "tarde":"24",
         "noite":"40"
         }    
   },
   "bairro":"Morumbi",
   "população":32281,
   "densidade":2832
}
```

----------
### Expectativa

Seu objetivo agora é implementar uma aplicação que entregue os resultados em um conjunto de dados com as características citadas acima. A aplicação pode ser um script ou uma REST API e você pode utilizar qualquer linguagem open source e framework/lib que se sinta confortável.

O que vamos avaliar?

Iremos avaliar a sua solução pela:

 - Performance
 - Escalabilidade
 - Portabilidade
 - Qualidade do código
 - Facilidade de manutenção
 - Interface Visual

----------

### Prazo e como entregar

Prazo de 5 dias a partir do momento que você receber o desafio.

Para entregá-lo você deve usar o serviço de hospedagem GitHub. O repositório deve ser PRIVADO e o acesso liberado para o usuário `xxxxxxx`.

Pedimos que você faça um **SOLUTION.md** com pelo menos instruções básicas como:

 - Como rodar localmente?
 - Como rodar os testes?
 - Como fazer o deploy?


Quando terminar o desafio, avise para o recrutador para podermos dar início a correção.

Bom teste!

----------
