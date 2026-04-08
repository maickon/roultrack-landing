const CONFIG = {

  // ── Produto ──────────────────────────────────────────────────
  productName: 'RouleTrack Pro',
  tagline:     'O Sistema que Coloca Você um Passo à Frente da Roleta',
  subtagline:  'Monitore resultados em tempo real, identifique padrões e receba alertas precisos. Pare de reagir — comece a anteceder.',

  // ── Hero stats (exibidos abaixo dos CTAs) ────────────────────
  stats: [
    { num: '100%',  label: 'em tempo real'        },
    { num: '+3',    label: 'tipos de alerta'       },
    { num: 'Ilimitadas', label: 'estratégias (elite)' },
  ],

  // ── Planos ───────────────────────────────────────────────────
  // featured: true = destaque central
  plans: [
    {
      name:     'Starter',
      price:    'R$ 19',
      per:      '/mês',
      desc:     'Perfeito para começar e testar suas estratégias',
      featured: false,
      features: [
        { text: 'Monitoramento em tempo real',       ok: true  },
        { text: 'Até 1 estratégias simultâneas',     ok: true  },
        { text: 'Alertas sonoros e visuais',         ok: true  },
        { text: 'Modo manual de entrada',            ok: true  },
        { text: 'Histórico de sinais',               ok: true  },
        { text: 'Alertas via Telegram',              ok: false },
        { text: 'Suporte prioritário',               ok: false },
      ],
      ctaLabel: 'Quero o Starter',
    },
    {
      name:     'Pro',
      price:    'R$ 89',
      per:      '/semestre',
      desc:     'Para jogadores sérios com múltiplas estratégias',
      featured: true,
      badgeLabel: '🔥 Mais Popular',
      features: [
        { text: 'Monitoramento em tempo real',       ok: true  },
        { text: 'Até 10 estratégias simultâneas',    ok: true  },
        { text: 'Alertas sonoros e visuais',         ok: true  },
        { text: 'Modo manual de entrada',            ok: true  },
        { text: 'Histórico de sinais',               ok: true  },
        { text: 'Alertas via Telegram',              ok: true  },
        { text: 'Suporte prioritário',               ok: false },
      ],
      ctaLabel: 'Quero o Pro',
    },
    {
      name:     'Elite',
      price:    'R$ 159',
      per:      '/ano',
      desc:     'Acesso completo, sem limitações',
      featured: false,
      features: [
        { text: 'Monitoramento em tempo real',       ok: true  },
        { text: 'Estratégias ilimitadas',            ok: true  },
        { text: 'Alertas sonoros e visuais',         ok: true  },
        { text: 'Modo manual de entrada',            ok: true  },
        { text: 'Histórico de sinais',               ok: true  },
        { text: 'Alertas via Telegram',              ok: true  },
        { text: 'Suporte prioritário via WhatsApp',  ok: true  },
      ],
      ctaLabel: 'Quero o Elite',
    },
  ],

  // ── Pagamento ────────────────────────────────────────────────
  pixKey:      '5522981877899',          // chave PIX
  pixName:     'MAICKON JOSE RANGEL',             // nome do recebedor
  whatsapp:    '5522981877899',             // número com DDI e DDD, sem +
  whatsappMsg: 'Olá! Realizei o pagamento do RouleTrack Pro. Segue o comprovante. Meu e-mail de acesso: ',

  // ── Download ─────────────────────────────────────────────────
  downloadUrl: 'RouleTrackPro.rar',   // link para download do .zip do plugin

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      q: 'O sistema garante que vou ganhar na roleta?',
      a: 'Não. O RouleTrack Pro é um assistente de análise que monitora resultados e ajuda você a aplicar suas próprias estratégias com mais precisão e disciplina. Resultados em jogos de azar sempre dependem de variáveis aleatórias.'
    },
    {
      q: 'Como o sistema funciona na prática?',
      a: 'Você configura suas estratégias (zona de números, rodadas de confirmação, galés), ativa o monitoramento e o sistema fica de olho nos resultados em tempo real. Quando identifica o padrão que você configurou, dispara um alerta com som, banner na tela e mensagem no Telegram.'
    },
    {
      q: 'O sistema funciona em qualquer site de cassino?',
      a: 'O plugin foi desenvolvido e testado para o site gamblingcounting.com, que reúne em tempo real os resultados de jogos de roleta das principais plataformas, como Evolution, Pragmatic Play, entre outras. O plugin apenas realiza a leitura desses dados e executa a estratégia configurada para gerar os sinais e alarmes. Outros sites podem funcionar se tiverem estrutura HTML similar, mas podem exigir ajustes no seletor CSS, o que pode ser feito nas configurações do plugin.'
    },
    {
      q: 'Como faço para instalar o plugin?',
      a: 'Após o pagamento, você recebe a pasta do plugin. No Chrome, acesse chrome://extensions, ative o "Modo do desenvolvedor" e clique em "Carregar sem compactação". Selecione a pasta do plugin e pronto — em menos de 2 minutos está funcionando.'
    },
    {
      q: 'Quando meu acesso é liberado após o pagamento?',
      a: 'Assim que recebemos o comprovante via WhatsApp com seu e-mail de acesso, liberamos manualmente em até algumas horas. Em horário comercial, geralmente em minutos.'
    },
    {
      q: 'Posso usar em vários computadores?',
      a: 'O acesso é vinculado ao seu e-mail. Você pode instalar o plugin em quantos dispositivos quiser e fazer login com o mesmo e-mail em todos.'
    },
    {
      q: 'Há reembolso caso eu não goste?',
      a: 'Avaliamos caso a caso. Entre em contato via WhatsApp dentro de 7 dias após a compra e analisaremos sua solicitação.'
    },
  ],

  // ── Textos gerais ────────────────────────────────────────────
  footerText: 'RouleTrack Pro não é um cassino, não realiza apostas e não garante resultados. Use com responsabilidade.',
};