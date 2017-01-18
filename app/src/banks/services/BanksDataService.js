/**
 * Banks DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function BanksDataService($q) {
  var Banks = [
    {
      name: 'Banco do Brasil S.A.',
      avatar: 'svg-1',
      content: 'Banco do Brasil S.A. é uma instituição financeira brasileira, constituída na forma de sociedade de economia mista, com participação da União brasileira em 54% das ações. [6] Juntamente com a Caixa Econômica Federal, o Banco Nacional de Desenvolvimento Econômico e Social, o Banco da Amazônia e o Banco do Nordeste, o Banco do Brasil é um dos cinco bancos estatais do governo brasileiro.'
    },
  /**  {
      name: 'Banco da Amazônia S.A',
      avatar: 'svg-2',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
    },**/
    {
      name: 'Banco do Nordeste do Brasil S.A.',
      avatar: 'svg-3',
      content: "O Banco do Nordeste do Brasil S. A. é o maior banco de desenvolvimento regional da América Latina e diferencia-se das demais instituições financeiras pela missão que tem a cumprir: Atuar como Banco de Desenvolvimento da Região Nordeste. Sua visão é a de ser o Banco preferido do Nordeste, reconhecido pela sua capacidade de promover o bem-estar das famílias e a competitividade das empresas da Região."
    },
    {
      name: 'Banco Santander (Brasil) S.A.',
      avatar: 'svg-4',
    //  content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
    },
    {
      name: 'Caixa Econômica Federal',
      avatar: 'svg-2',
      content: "A Caixa é uma empresa 100% pública, e que exerce um papel fundamental no desenvolvimento urbano e da justiça social do país, vez que prioriza setores como habitação, saneamento básico, infraestrutura e prestação de serviços, contribuindo significativamente para melhorar a vida das pessoas, principalmente as de baixa renda."
    },
    {
      name: 'Banco Bradesco S.A.',
      avatar: 'svg-100',
      content: "O Banco Bradesco é uma das maiores instituições financeiras do Brasil, considerando o total de ativos, número de agências e clientes. Atende no Brasil e no exterior a diversos perfis de públicos, pessoa física, empresas de todos os portes e importantes sociedades e instituições nacionais e internacionais. "
    },
    {
      name: 'Itaú Unibanco S.A',
      avatar: 'svg-4',
      content: "O Itaú Unibanco é o maior banco privado do Brasil - e uma das maiores empresas do mundo, segundo ranking da Forbs, levando em conta atributos como negócios gerados, ativos e valor de mercado. "
    }
  ];

  // Promise-based API
  return {
    loadAllBanks: function() {
      // Simulate async nature of real remote calls
      return $q.when(banks);
    }
  };
}

export default ['$q', BanksDataService];
