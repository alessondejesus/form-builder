jQuery(function ($) {
    const options = {
        disabledActionButtons: ['data', 'save', 'clear'],
        actionButtons: [
            {
                id: 'clearFormDatas',
                className: 'btn btn-danger mt-2 mr-2 rounded',
                label: 'Apagar Tudo',
                type: 'button',
                events: {
                    click: function () {
                        formBuilder.actions.clearFields()
                    }
                }
            },
            {
                id: 'formToJsonAndHTML',
                className: 'btn btn-success mt-2 rounded',
                label: 'Exibir JSON e HTML',
                type: 'button',
                'data-target': '#exampleModal',
                'data-toggle': 'modal',
                events: {
                    click: function () {
                        const json = formBuilder.actions.getData('json')

                        const container = document.getElementById('fb-rendered-form');
                        const formRenderOpts = {
                            container,
                            formData: json,
                            dataType: 'json'
                        };

                        $(container).formRender(formRenderOpts);
                        console.log(json)
                    }
                }
            }
        ],
        i18n: {
            override: {
                'en-US': {
                    addOption : 'Adicionar Opção',
                    allFieldsRemoved : 'Todos os campos foram removidos.',
                    allowMultipleFiles : 'Permitir que usuários enviem vários arquivos',
                    autocomplete : 'Auto Completar',
                    button : 'Botão',
                    cannotBeEmpty : 'Este campo não pode ficar vazio',
                    checkbox :' Caixa de seleção',
                    checkboxes : 'Caixas de seleção',
                    checkboxGroup : 'Grupo de seleção',
                    className : 'Classe',
                    clear : 'Limpar',
                    clearAllMessage : 'Tem certeza que limpar todos os campos?',
                    close: 'Fechar',
                    content :' Conteúdo',
                    copy : 'Copiar',
                    copyButton : '&#43;',
                    copyButtonTooltip : 'Copiar',
                    dateField : 'Campo de data',
                    description : 'Texto de ajuda',
                    descriptionField : 'Descrição',
                    devMode : 'Modo de desenvolvedor',
                    editNames : 'Editar nomes',
                    editorTitle : 'Elementos do formulário',
                    editXML : 'Editar XML',
                    enableOther : 'Habilitar &quot;Outro&quot;',
                    enableOtherMsg : 'Permitir que usuários insiram uma opção não listada',
                    fieldDeleteWarning : 'Tem certeza que excluir o campo?',
                    fieldNonEditable : 'Este campo não pode ser editado.',
                    fieldRemoveWarning : 'Tem certeza que deseja remover o campo',
                    fieldVars : 'Variáveis do campo',
                    fileUpload : 'Envio de arquivo',
                    formUpdated : 'Formulário atualizado',
                    getStarted : 'Arraste campos aqui para começar',
                    header : 'Cabeçalho',
                    hidden : 'Campo oculto',
                    hide : 'Ocultar',
                    inline : 'Linear',
                    inlineDesc : 'Mostrar {type} linear',
                    label : 'Título',
                    labelEmpty : 'Título do campo não pode ficar vazio',
                    limitRole : 'Permitir acesso apenas à:',
                    mandatory : 'Obrigatório',
                    maxlength : 'Tamanho máximo',
                    minOptionMessage : 'Este campo exige no mínimo 2 opções',
                    minSelectionRequired : 'Requer ao menos {min} seleções',
                    multipleFiles : 'Múltiplos arquivos',
                    name : 'Nome',
                    no : 'Não',
                    noFieldsToClear : 'Não há campos para limpar',
                    number : 'Número',
                    off : 'Desativar',
                    on : 'Ativar',
                    option : 'Opção',
                    optional : 'opcional',
                    optionCount : 'Opção {count}',
                    optionEmpty : 'Valor da opção é obrigatório',
                    optionLabelPlaceholder : 'Título',
                    options : 'Opções',
                    optionValuePlaceholder : 'Valor',
                    other : 'Outro',
                    paragraph : 'Parágrafo',
                    placeholder : 'Placeholder',
                    'placeholders.className' : 'classes separadas por espaco',
                    'placeholders.email' : 'E-mail',
                    'placeholders.label' : 'Título',
                    'placeholders.password' : 'Senha',
                    'placeholders.placeholder' : 'Placeholder',
                    'placeholders.text' : 'Texto',
                    'placeholders.textarea' : 'Texto longo',
                    'placeholders.value' : 'Valor',
                    preview : 'Visualizar',
                    radio : 'Opção',
                    radioGroup : 'Grupo de opções',
                    remove : '&#215;',
                    removeMessage : 'Remover elemento',
                    removeOption : 'Remover opção',
                    required : 'Requerido',
                    requireValidOption : 'Aceitar apenas opções pré-definidas',
                    richText : 'Editor de texto',
                    roles : 'Acesso',
                    rows : 'Linhas',
                    save : 'Salvar',
                    select : 'Seleção',
                    selectColor : 'Seleção de cor',
                    selectionsMessage : 'Permitir seleção múltipla',
                    selectOptions : 'Opções',
                    size : 'Tamanho',
                    'size.lg' : 'Largo',
                    ' size.m' : 'Médio (padrão)',
                    'size.sm' : 'Pequeno',
                    ' size.xs' : 'Extra pequeno',
                    style : 'Estilo',
                    ' styles.btn.danger' : 'Perigo',
                    'styles.btn.default' : 'Padrão',
                    'styles.btn.info ': 'Informação',
                    'styles.btn.primary ': 'Primário',
                    'styles.btn.success' : 'Sucesso',
                    'styles.btn.warning ': 'Aviso',
                    subtype : 'Tipo',
                    text : 'Campo de texto',
                    textArea : 'Área de texto',
                    toggle : 'Alternar',
                    value : 'Valor',
                    viewJSON : '[{&hellip;}]',
                    viewXML : '&lt;/&gt;',
                    warning : 'Aviso!',
                    yes : 'Sim'
                }
            }

        }
    }

    const fbEditor = document.getElementById('fb-editor')
    const formBuilder = $(fbEditor).formBuilder(options)
})
