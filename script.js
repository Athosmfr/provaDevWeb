document.addEventListener("DOMContentLoaded", function() {
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmaSenha');
    let erroExibido = false;

    // Adiciona um ouvinte de evento de input para verificar automaticamente ao digitar
    confirmarSenhaInput.addEventListener('input', validarSenha);

    function validarSenha() {
        // Remove qualquer mensagem de erro anterior
        removerErro();

        // Verifica se a senha tem pelo menos 8 caracteres e é igual à confirmação de senha
        if (senhaInput.value.length >= 8 && senhaInput.value === confirmarSenhaInput.value) {
            // Se atender à condição, remove a mensagem de erro e retorna
            if (erroExibido) {
                removerErro();
                erroExibido = false;
            }
            return;
        }

        // Se não atender à condição e a mensagem ainda não foi exibida, mostra a mensagem de erro
        if (!erroExibido) {
            mostrarErro('A senha e a confirmação de senha não coincidem ou a senha tem menos de 8 caracteres');
            erroExibido = true;
        }

        function mostrarErro(message) {
            const textoErro = document.createElement('p');
            textoErro.className = 'error-message'; // Adiciona uma classe para identificar a mensagem de erro
            textoErro.textContent = message;

            // Encontra a div 'form-info' correspondente ao campo 'confirmaSenha'
            const confirmarSenhaDiv = confirmarSenhaInput.parentNode;

            // Adiciona mensagem de erro após a div 'form-info' do campo 'confirmaSenha'
            confirmarSenhaDiv.parentNode.insertBefore(textoErro, confirmarSenhaDiv.nextSibling);
        }

        function removerErro() {
            const mensagemDeErroAnterior = confirmarSenhaInput.parentNode.nextElementSibling.querySelector('.error-message');
            if (mensagemDeErroAnterior) {
                mensagemDeErroAnterior.remove();
            }
        }
    }

    // Não chama a função validarSenha automaticamente ao entrar na página
});
