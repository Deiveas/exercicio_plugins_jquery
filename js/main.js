$(document).ready(function () {
    $('#carossel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#tel').mask('(00) 00000-0000')

    $('#tel-cadastro').mask('(00) 00000-0000')

    $('#cpf-cadastro').mask('000.000.000-00')

    $('#cep-cadastro').mask('00000-000')

    let formContato = $('#form-contato')

    $(formContato).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, digite seu telefone',
            email: 'Por favor, digite um e-mail válido',
            veiculoInteresse: 'Escolha o veiculo de interesse',
            mensagem: 'Por favor, deixe seu elogio ou sugestão'
        },
        submitHandler: function (formContato) {
            console.log(formContato)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });

    let formCadastro = $('#form-cadastro')

    $(formCadastro).validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            emailCadastro: {
                required: true
            },
            telCadastro: {
                required: true
            },
            cpfCadastro: {
                required: true
            },
            endCadastro: {
                required: true
            },
            cepCadastro: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, digite seu nome completo!',
            emailCadastro: 'Por favor, digite um e-mail válido!',
            telCadastro: 'Por favor, digite seu telefone!',
            cpfCadastro: 'Por favor, digite um CPF válido!',
            endCadastro: 'Por favor, digite seu endereço completo!',
            cepCadastro: 'Por favor, digite um CEP válido!'
        },

        submitHandler: function (formCadastro) {
            console.log(formCadastro)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $("#reservado").click(function (e) {
        e.preventDefault();

        if (formContato.valid()) {
            abrirImagemReservado();
        }
    });

    function abrirImagemReservado() {
        window.open("https://img.freepik.com/fotos-gratis/elegante-par-em-um-car-salao_1157-20463.jpg");
    }

    $("#sucesso").click(function (e) {
        e.preventDefault();

        if (formCadastro.valid()) {
            abrirImagemSucesso();
        }
    });

    function abrirImagemSucesso() {
        window.open("https://www.acejundiai.com.br/wp-content/uploads/2020/06/CADASTRO-REALIZADO-COM-SUCESSO-1.jpg");
    }

});


