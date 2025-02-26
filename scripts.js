const commands = {
    'ls': 'Lista o conteúdo de um diretório.<br>Exemplo: ls /home/usuario',
    'cd': 'Altera o diretório de trabalho.<br>Exemplo: cd /home',
    'pwd': 'Exibe o diretório atual de trabalho.',
    'mkdir': 'Cria um novo diretório.<br>Exemplo: mkdir nova_pasta',
    'rm': 'Remove arquivos ou diretórios.<br>Exemplo: rm arquivo.txt',
    'help' : 'Comandos possíveis: cd, ls, mkdir, pwd e rm.'
};

document.getElementById('commandInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processCommand();
    }
});

function processCommand() {
    const input = document.getElementById('commandInput').value.trim().toLowerCase();
    const output = document.getElementById('output');
    
    if (input === '') {
        output.innerHTML = '<span class="output-err">Por favor, insira um comando válido.<br>Para ajuda, escreva "help"</span>';
        return;
    }
    
    if (commands[input]) {
        if (input === 'help') {
            output.innerHTML = `<span class="output-cmd">${commands[input]}</span>`;
        } else {
            output.innerHTML = `<span class="output-cmd">${input}: ${commands[input]}</span>`;
        }
    } else {
        output.innerHTML = '<span class="output-err">Comando não encontrado.<br>Para ajuda, escreva "help"</span>';
    }
}

function clearInput() {
    document.getElementById('commandInput').value = '';
    document.getElementById('output').innerHTML = '';
}