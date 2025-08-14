
// Projeto Prático: Sistema de Playlist Musical

console.log("=== SISTEMA DE PLAYLIST MUSICAL ===");

// Estrutura de uma música
function criarMusica(id, titulo, artista, duracao, genero) {
    return {
        id,
        titulo,
        artista,
        duracao, // em segundos
        genero,
        reproduzida: false,
        vezes_tocada: 0
    };
}

// Inicializar playlist
const playlist = [];

// Adicionando músicas iniciais
const musicasIniciais = [
    [1, "Bohemian Rhapsody", "Queen", 355, "Rock"],
    [2, "Imagine", "John Lennon", 183, "Pop"],
    [3, "Hotel California", "Eagles", 391, "Rock"],
    [4, "Billie Jean", "Michael Jackson", 294, "Pop"],
    [5, "Stairway to Heaven", "Led Zeppelin", 482, "Rock"]
];

for (let dadosMusica of musicasIniciais) {
    const [id, titulo, artista, duracao, genero] = dadosMusica;
    const musica = criarMusica(id, titulo, artista, duracao, genero);
    playlist.push(musica);
}

console.log(`🎵 Playlist iniciada com ${playlist.length} músicas`);

// Função para exibir playlist
function exibirPlaylist() {
    console.log("\n=== PLAYLIST ATUAL ===");
    
    if (playlist.length === 0) {
        console.log("Playlist vazia");
        return;
    }
    
    for (let i = 0; i < playlist.length; i++) {
        const musica = playlist[i];
        const duracao = formatarTempo(musica.duracao);
        const status = musica.reproduzida ? "🔊" : "⏸️";
        
        console.log(`${i + 1}. ${status} ${musica.titulo} - ${musica.artista} (${duracao}) [${musica.genero}] - ${musica.vezes_tocada}x`);
    }
}

// Função para formatar tempo em minutos:segundos
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos}:${segs.toString().padStart(2, '0')}`;
}

// Função para adicionar música no final
function adicionarMusica(titulo, artista, duracao, genero) {
    const novoId = playlist.length > 0 ? Math.max(...playlist.map(m => m.id)) + 1 : 1;
    const novaMusica = criarMusica(novoId, titulo, artista, duracao, genero);
    
    playlist.push(novaMusica);
    return {
        sucesso: true,
        mensagem: `"${titulo}" adicionada à playlist`,
        posicao: playlist.length
    };
}

// Função para inserir música em posição específica
function inserirMusicaEm(posicao, titulo, artista, duracao, genero) {
    if (posicao < 1 || posicao > playlist.length + 1) {
        return {
            sucesso: false,
            mensagem: `Posição inválida. Use entre 1 e ${playlist.length + 1}`
        };
    }
    
    const novoId = playlist.length > 0 ? Math.max(...playlist.map(m => m.id)) + 1 : 1;
    const novaMusica = criarMusica(novoId, titulo, artista, duracao, genero);
    
    playlist.splice(posicao - 1, 0, novaMusica);
    return {
        sucesso: true,
        mensagem: `"${titulo}" inserida na posição ${posicao}`,
        posicao
    };
}

// Função para remover música por posição
function removerMusicaPorPosicao(posicao) {
    if (posicao < 1 || posicao > playlist.length) {
        return {
            sucesso: false,
            mensagem: `Posição inválida. Use entre 1 e ${playlist.length}`
        };
    }
    
    const musicaRemovida = playlist.splice(posicao - 1, 1)[0];
    return {
        sucesso: true,
        mensagem: `"${musicaRemovida.titulo}" removida da playlist`,
        musica: musicaRemovida
    };
}

// Função para mover música
function moverMusica(posicaoOrigem, posicaoDestino) {
    if (posicaoOrigem < 1 || posicaoOrigem > playlist.length ||
        posicaoDestino < 1 || posicaoDestino > playlist.length) {
        return {
            sucesso: false,
            mensagem: "Posições inválidas"
        };
    }
    
    const musica = playlist.splice(posicaoOrigem - 1, 1)[0];
    playlist.splice(posicaoDestino - 1, 0, musica);
    
    return {
        sucesso: true,
        mensagem: `"${musica.titulo}" movida da posição ${posicaoOrigem} para ${posicaoDestino}`
    };
}

// Função para buscar músicas
function buscarMusicaPorTitulo(titulo) {
    const encontradas = [];
    
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].titulo.toLowerCase().includes(titulo.toLowerCase())) {
            encontradas.push({
                posicao: i + 1,
                musica: playlist[i]
            });
        }
    }
    
    return encontradas;
}

// Função para buscar por artista
function buscarMusicaPorArtista(artista) {
    const encontradas = [];
    
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].artista.toLowerCase().includes(artista.toLowerCase())) {
            encontradas.push({
                posicao: i + 1,
                musica: playlist[i]
            });
        }
    }
    
    return encontradas;
}

// Função para reproduzir música
function reproduzirMusica(posicao) {
    if (posicao < 1 || posicao > playlist.length) {
        return {
            sucesso: false,
            mensagem: "Posição inválida"
        };
    }
    
    const musica = playlist[posicao - 1];
    musica.reproduzida = true;
    musica.vezes_tocada++;
    
    return {
        sucesso: true,
        mensagem: `🎵 Reproduzindo: "${musica.titulo}" - ${musica.artista}`,
        musica
    };
}

// Função para criar subplaylist por gênero
function criarSubplaylistPorGenero(genero) {
    const subplaylist = [];
    
    for (let musica of playlist) {
        if (musica.genero.toLowerCase() === genero.toLowerCase()) {
            subplaylist.push(musica);
        }
    }
    
    return subplaylist;
}

// Função para embaralhar playlist
function embaralharPlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Trocar posições
        const temp = playlist[i];
        playlist[i] = playlist[j];
        playlist[j] = temp;
    }
    
    return "🔀 Playlist embaralhada!";
}

// Função para calcular duração total
function calcularDuracaoTotal() {
    let totalSegundos = 0;
    
    for (let musica of playlist) {
        totalSegundos += musica.duracao;
    }
    
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    
    return {
        total_segundos: totalSegundos,
        formatado: `${horas}h ${minutos}m ${segundos}s`
    };
}

// Função para obter estatísticas
function obterEstatisticas() {
    const stats = {
        total_musicas: playlist.length,
        musicas_reproduzidas: 0,
        musicas_nao_reproduzidas: 0,
        total_reproducoes: 0,
        generos: {},
        artistas: {},
        musica_mais_tocada: null,
        duracao_total: calcularDuracaoTotal()
    };
    
    for (let musica of playlist) {
        // Contadores de reprodução
        if (musica.reproduzida) {
            stats.musicas_reproduzidas++;
        } else {
            stats.musicas_nao_reproduzidas++;
        }
        
        stats.total_reproducoes += musica.vezes_tocada;
        
        // Contagem por gênero
        if (stats.generos[musica.genero]) {
            stats.generos[musica.genero]++;
        } else {
            stats.generos[musica.genero] = 1;
        }
        
        // Contagem por artista
        if (stats.artistas[musica.artista]) {
            stats.artistas[musica.artista]++;
        } else {
            stats.artistas[musica.artista] = 1;
        }
        
        // Música mais tocada
        if (!stats.musica_mais_tocada || musica.vezes_tocada > stats.musica_mais_tocada.vezes_tocada) {
            stats.musica_mais_tocada = musica;
        }
    }
    
    return stats;
}

// ===== SIMULAÇÃO DO SISTEMA =====

console.log("\n=== ESTADO INICIAL ===");
exibirPlaylist();

console.log("\n=== ADICIONANDO MÚSICAS ===");
let resultado = adicionarMusica("Sweet Child O' Mine", "Guns N' Roses", 356, "Rock");
console.log(resultado.mensagem);

resultado = inserirMusicaEm(3, "Thriller", "Michael Jackson", 357, "Pop");
console.log(resultado.mensagem);

console.log("\n=== PLAYLIST APÓS ADIÇÕES ===");
exibirPlaylist();

console.log("\n=== BUSCANDO MÚSICAS ===");
const buscaTitulo = buscarMusicaPorTitulo("imagine");
console.log("Busca por 'imagine':");
for (let resultado of buscaTitulo) {
    console.log(`- Posição ${resultado.posicao}: ${resultado.musica.titulo}`);
}

const buscaArtista = buscarMusicaPorArtista("Michael");
console.log("Busca por artista 'Michael':");
for (let resultado of buscaArtista) {
    console.log(`- Posição ${resultado.posicao}: ${resultado.musica.titulo} - ${resultado.musica.artista}`);
}

console.log("\n=== REPRODUZINDO MÚSICAS ===");
console.log(reproduzirMusica(1).mensagem);
console.log(reproduzirMusica(3).mensagem);
console.log(reproduzirMusica(1).mensagem); // Tocar novamente

console.log("\n=== MOVENDO MÚSICA ===");
resultado = moverMusica(1, 5);
console.log(resultado.mensagem);

console.log("\n=== PLAYLIST APÓS MOVIMENTAÇÃO ===");
exibirPlaylist();

console.log("\n=== SUBPLAYLIST POR GÊNERO ===");
const rockPlaylist = criarSubplaylistPorGenero("Rock");
console.log("Músicas de Rock:");
for (let musica of rockPlaylist) {
    console.log(`- ${musica.titulo} - ${musica.artista}`);
}

console.log("\n=== REMOVENDO MÚSICA ===");
resultado = removerMusicaPorPosicao(2);
console.log(resultado.mensagem);

console.log("\n=== EMBARALHANDO PLAYLIST ===");
console.log(embaralharPlaylist());

console.log("\n=== PLAYLIST EMBARALHADA ===");
exibirPlaylist();

console.log("\n=== ESTATÍSTICAS FINAIS ===");
const stats = obterEstatisticas();

console.log(`📊 Total de músicas: ${stats.total_musicas}`);
console.log(`▶️ Reproduzidas: ${stats.musicas_reproduzidas}`);
console.log(`⏸️ Não reproduzidas: ${stats.musicas_nao_reproduzidas}`);
console.log(`🔢 Total de reproduções: ${stats.total_reproducoes}`);
console.log(`⏱️ Duração total: ${stats.duracao_total.formatado}`);

console.log("\n🎼 Músicas por gênero:");
for (let genero in stats.generos) {
    console.log(`  ${genero}: ${stats.generos[genero]} música(s)`);
}

console.log("\n🎤 Músicas por artista:");
for (let artista in stats.artistas) {
    console.log(`  ${artista}: ${stats.artistas[artista]} música(s)`);
}

if (stats.musica_mais_tocada && stats.musica_mais_tocada.vezes_tocada > 0) {
    console.log(`\n🔥 Música mais tocada: "${stats.musica_mais_tocada.titulo}" - ${stats.musica_mais_tocada.vezes_tocada} vezes`);
}

console.log("\n=== DEMONSTRAÇÃO DE ACESSO SEGURO ===");

// Função para acessar música com verificações
function obterMusicaPorPosicao(posicao) {
    if (posicao < 1 || posicao > playlist.length) {
        return {
            sucesso: false,
            mensagem: `Posição ${posicao} inválida. Playlist tem ${playlist.length} música(s).`
        };
    }
    
    return {
        sucesso: true,
        musica: playlist[posicao - 1],
        posicao
    };
}

console.log("Tentativa de acesso válido (posição 1):");
let acesso = obterMusicaPorPosicao(1);
if (acesso.sucesso) {
    console.log(`✅ ${acesso.musica.titulo} - ${acesso.musica.artista}`);
} else {
    console.log(`❌ ${acesso.mensagem}`);
}

console.log("Tentativa de acesso inválido (posição 100):");
acesso = obterMusicaPorPosicao(100);
if (acesso.sucesso) {
    console.log(`✅ ${acesso.musica.titulo} - ${acesso.musica.artista}`);
} else {
    console.log(`❌ ${acesso.mensagem}`);
}

console.log("\n=== SISTEMA DE PLAYLIST CONCLUÍDO! ===");
