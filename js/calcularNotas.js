// 
document.addEventListener('DOMContentLoaded', () => {
    // recuperar o formulario e o tbody
    // lado esquerdo do "=" sempre js e direito sempre html
    const form = document.querySelector('#dados');
    const tbody = document.querySelector('.historico');

    // cancelando evento "submit"
    form.addEventListener('submit', (e) => {

        // cancelando evento
        e.preventDefault();

        // pegando nome do aluno e disciplina
        // metodo ".trim" , expulsa os espaços das extremidades, " gabriel ", ele exclui os espaços em volta de gabriel
        const nomeAluno = document.querySelector('#nomeAluno').value.trim();
        const disciplina = document.querySelector('#disciplina').value;

        if(disciplina === '0'){
            alert('Por favor, selecione uma disciplina válida')
            document.querySelector('#disciplina').focus();
            return;
        }


        // pegando cp e colocando no array
        // tudo que o usuario escreve, vem como String
        const ckp = [
            Number(document.querySelector('#ckp01').value.trim()),
            Number(document.querySelector('#ckp02').value.trim()),
            Number(document.querySelector('#ckp03').value.trim()),
        ]


        // pegando sprints e gs
        const sprint01 = Number(document.querySelector('#sprint01').value.trim());
        const sprint02 = Number(document.querySelector('#sprint01').value.trim());
        const gs = Number(document.querySelector('#globalSolution').value.trim());


        // organizar os arrays de sprint
        // se o resultado de b - a for positivo === b vem antes do a
        // se o resultado de b - a for negativo === a vem antes do b
        ckp.sort((a,b) => b - a);
        console.log(ckp);


        const mediaCheckpoint = (((ckp[0] + ckp[1])/2 ) * .4);
        const mediaSprint = (((sprint01 + sprint02)/2) * .3 )
        const mediaSemester = (((mediaCheckpoint + mediaSprint) * .4) + (gs * .6)); 

        // montando a linha da tabela
        // montando o html dentro do js
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nomeAluno}</td>
            <td>${disciplina}</td>
            <td>${ckp[0].toFixed(1)}</td>
            <td>${ckp[1].toFixed(1)}</td>
            <td>${mediaCheckpoint.toFixed(1)}</td>
            <td>${sprint01.toFixed(1)}</td>
            <td>${sprint02.toFixed(1)}</td>
            <td>${mediaSprint.toFixed(1)}</td>
            <td>${gs.toFixed(1)}</td>
            <td>${mediaSemester.toFixed(1)}</td>

        `;

        tbody.prepend(tr);
        

    });



})