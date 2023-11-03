import React from "react";
import Layout from "@/components/Layout";

export default function Index(){
    let produtos = [
        {
            nome: `Notebook Macbook Air Apple, Tela de Retina 13", M1, 8GB RAM, CPU 8 Núcleos, GPU 7 Núcleos, 256GB SSD, Prata - MGN93BZ/A`,
            descricao: `Características:
            - Marca: Apple
            - Modelo: MGN93BZ/A
            Especificações:            
            Tela:
            - Retina
            - Tela de 13,3 polegadas (na diagonal) retroiluminada por LED, com tecnologia IPS; resolução nativa de 2560 x 1600 com 227 pixels por polegada e suporte a milhões de cores
            - 400 nits de brilho
            - Ampla tonalidade de cores (P3)
            - Tecnologia True Tone
            Resoluções dimensionadas compatíveis:
            - 1680 x 1050
            - 1440 x 900
            - 1024 x 640
            Chip:
            - M1 da Apple
            - CPU de 8 núcleos (4 de desempenho e 4 de eficiência)
            - GPU de 7 núcleos
            - Neural Engine de 16 núcleos
            Bateria e energia:
            - Até 15 horas de navegação em rede sem fio
            - Até 18 horas de reprodução de vídeo no app Apple TV
            - Bateria interna de polímero de lítio de 49,9 watts/hora
            - Adaptador de energia USB-C de 30W
            Portas e expansão:
            Duas portas Thunderbolt / USB 4 compatíveis com:
            - Recarga
            - DisplayPort
            - Thunderbolt 3 (até 40 Gb/s)
            - USB 4 (até 40 Gb/s)
            - USB 3.1 Gen 2 (até 10 Gb/s)
            Memória:
            - 8 GB
            - Memória unificada de 8 GB
            - Possibilidade de configuração para: 16 GB
            Armazenamento:
            - 256 GB
            - SSD de 256 GB
            - Possibilidade de configuração para: 512 GB, 1 TB ou 2 TB
            Teclado e trackpad:
            - Magic Keyboard retroiluminado com:
            - 78 (EUA) ou 79 (ISO) teclas, incluindo 12 teclas de função e 4 teclas de direção com disposição de “T” invertido
            - Sensor de luz ambiente
            - Trackpad Force Touch para controle preciso do cursor e sensores de pressão. Possibilita toques fortes, aceleradores, traço sensível à pressão e gestos Multi-Touch.
            Touch ID:
            - Sensor Touch ID
            Conexões sem fio:
            Wi-Fi:
            - Rede Wi-Fi 6 802.11ax
            - Compatível com IEEE 802.11a/b/g/n/ac
            Bluetooth:
            - Bluetooth 5.0
            Câmera:
            - Câmera FaceTime HD de 720p
            Compatibilidade de vídeo:
            - Suporte simultâneo à resolução nativa na tela do computador, com milhões de cores, e: Um monitor externo com resolução de até 6K a 60 Hz
            - Saída de vídeo digital Thunderbolt 3: Saída DisplayPort nativa via USB-C / Saída VGA, HDMI, DVI e Thunderbolt 2 usando adaptadores (vendidos separadamente)
            Áudio:
            - Alto-falantes estéreo
            - Som estéreo amplo
            - Compatível com áudio em Dolby Atmos
            - Conjunto de três microfones com filtragem espacial direcional
            - Entrada para fones de ouvido de 3,5 mm
            Requisitos operacionais:
            - Voltagem: 100–240 VCA
            - Frequência: 50–60 Hz
            - Temperatura operacional: 10 ºC a 35 ºC (50 ºF a 95 ºF)
            - Temperatura de armazenamento: -25 °C a 45 °C (-13 °F a 113 °F)
            - Umidade relativa: 0% a 90%, sem condensação
            - Altitude operacional: testado até 3.000 metros
            - Altitude máxima de armazenamento: 4.500 metros
            - Altitude máxima de transporte: 10.500 metros
            Tamanho:
            - Espessura: 0,41–1,61 cm 
            - Largura: 30,41 cm 
            - Profundidade: 21,24 cm 
            Sistema operacional:
            - macOS: O macOS é o sistema operacional para computadores mais avançado do mundo. O macOS Big Sur traz um novo design e atualizações importantes para os apps, levando o macOS a um novo nível de potência e beleza.
            Conteúdo da Embalagem:
            - 1x MacBook Air
            - 1x Adaptador de energia USB-C de 30W
            - 1x Cabo carregador USB-C (2m)`,
            valor: "R$ 7.799,99",
            url: "https://images.kabum.com.br/produtos/fotos/153435/macbook-air-apple-13-3-processador-m1-8gb-ssd-256gb-silver-mgn93bz-a_1616417002_gg.jpg"
        },
        {
            nome: `Notebook Macbook Air Apple, Tela de Retina 13", M2, 8GB RAM, CPU 8 Núcleos, GPU 8 Núcleos, SSD 256GB, Cinza Espacial - MLXW3BZ/A`,
            descricao: `
                Características
                - Marca: Apple
                - Modelo: MLXW3BZ/A            
                Especificações
                - Processador: Chip M2 da Apple, GPU de 8 núcleos, CPU de 8 núcleos (4 de desempenho e 4 de eficiência)  
                - Neural Engine de 16 núcleos para tarefas de aprendizado de máquina avançado 
                - 100 GB/s de largura de banda da memória 
                - Armazenamento: SSD 256GB  
                - Memória: 8GB  
                - Câmera FaceTime HD de 1080p com o dobro de resolução e desempenho em pouca luz 
                - Touch ID: Sensor Touch ID  
                Tela
                - Liquid Retina 
                - Tela de 13,6 polegadas (na diagonal) retroiluminada por LED, com tecnologia IPS;1 resolução nativa de 2560 x 1664 com 224 pixels por polegada e suporte a um bilhão de cores 
                - 500 nits de brilho 
                - Ampla tonalidade de cores (P3) 
                - Tecnologia True Tone 
            `,
            valor: "R$ 8.999,99",
            url: "https://images.kabum.com.br/produtos/fotos/404436/macbook-air-apple-13-6-2k-qhd-processador-m2-8gb-ram-ssd-256gb-ips-macos-spacial-grey-mlxw3bz-a_1671806121_gg.jpg"
        },
        {
            nome: `Notebook Gamer Acer Nitro 5 Intel Core I7-11800H, 16GB RAM, NVIDIA RTX3050, SSD 512GB, 15.6" LED FHD IPS, Linux, Preto - AN515-57-795J`,
            descricao: `Características:
            - Marca: Acer
            - Modelo: AN515-57-795J            
            Especificações:            
            Destaques:
            - Processador Intel Core i7-11800H da 11a Geração série H com 8 núcleos
            - Tela de 15,6” IPS de 144Hz com resolução Full HD
            - GPU Nvidia GeForce RTX 3050 com 4 GB de memória dedicada GDDR6 (TGP de 60W)
            - Memória RAM DDR4
            - 512 GB de armazenamento em SSD NVMe
            - Sistema Operacional Linux Gutta
            - Tecnologia DTS X: Ultra Áudio
            - Teclado retroiluminado na cor vermelha
            - Tecla de atalho Nitro Sense
            - Habilitado para upgrade`,
            valor: "R$ 4.499,99",
            url: "https://images.kabum.com.br/produtos/fotos/495513/notebook-gamer-acer-nitro-5-intel-core-i7-11800h-16gb-ram-nvidia-rtx3050-ssd-512gb-15-6-led-fhd-ips-linux-preto-an515-57-795j_1696511422_gg.jpg"
        },

        {
            nome: `Notebook Gamer Acer Nitro AMD Ryzen 7-5800H, 8GB RAM, GeForce GTX 1650, SSD 1TB, 15.6 Full HD, Windows 11, Preto - AN515-45-R4S3`,
            descricao: `Notebook Gamer Acer Aspire Nitro 5 AN515-45-R4S3 

            É Ação do Começo ao Fim
            Equpado com uma Placa de Vídeo NVIDIA GeForce GTX 1650 com 4GB de memória dedicada GDDR6, garantindo a performance que você precisa para surpreender seus adversários e jogar com alto nível de realismo.
            
            Processamento Surpreendente
            Nada pode te parar com o AMD Ryzen 7 deste notebook. Juntamente com 8 GB de memória RAM, expansível até 32GB, o processador te leva aos níveis mais avançados de games e criação de conteúdo.
            
            Velocidade e Fluidez
            Os 1TB SSD desta máquina garantem mais espaço para armazenar seus jogos mais pesados e promovem a velocidade necessária para chegar ao topo!
            
            Windows 11
            O Aspire Nitro 5 vem equipado com o sistema operacional Windows 11, entregando gráficos superiores, que promovem sensação extra de refinamento e profundidade da imagem, além da impressionante velocidade e seleção gigantesca de aplicativos para explorar.`,
            valor: "R$ 4.069,99",
            url: "https://images.kabum.com.br/produtos/fotos/433422/notebook-gamer-acer-nitro-amd-ryzen-7-5800h-8gb-ram-geforce-gtx-1650-1tb-ssd-15-6-full-hd-windows-11-preto-an515-45-r4s3_1678899001_gg.jpg"
        },

        {
            nome: `Monitor Gamer Husky Storm 27' LED, Curvo, 165 Hz, Full HD, 1ms, Adaptive Sync, HDMI/DisplayPort, Ajuste de Ângulo - HGMT001`,
            descricao: `Monitor Gamer Husky Storm 27' LED, Curvo, 165 Hz, Full HD, 1ms, Adaptive Sync, HDMI/DisplayPort, Ajuste de Ângulo

            Esteja um passo à frente!
            O Monitor Husky Storm conta com resposta de 1ms e taxa de atualização de 165Hz, permitindo a mais alta performance durante suas gameplays. Sua curvatura amplia o campo de visão relativo, concentrando toda a ação ao alcance dos olhos do usuário, sem perder resolução.
            
            Tecnologia Adaptive Sync 
            Compatível com a tecnologia Adaptive Sync, permite a sincronização dos frames da placa de vídeo, decretando o fim do input lag, bem como do tearing.
            
            Monitor Curvo 
            Tenha mais imersão na sua gaming player com esse monitor curvo da Husky. Observe seus adversários ainda mais de perto com essa imersão de 1500r de curvatura e um ângulo de visão de 178º.

            Adaptive Sync
            Evita o imput lag e combate o problema da quebra de quadros durante a reprodução dos frames. Essa Tecnologia evita o travamento do jogo para uma jogabilidade mais suave possível. Explore novas paisagens e capture seus inimigos em movimentos suaves e contínuos.

            Inclinável
            Ajuste de inclinação da tela de 5° a 15°. Ajuste seu monitor da maneira que quiser deixando sua visão ainda mais confortável e ampla`,
            valor: "R$ 899,99",
            url: "https://images.kabum.com.br/produtos/fotos/115384/monitor-gamer-husky-storm-27-led-curvo-165-hz-full-hd-1ms-adaptive-sync-hdmi-displayport-ajuste-de-angulo-hgmt001_1678993389_gg.jpg"
        },

        {
            nome: `Placa de Vídeo RX 7600 GAMING OC 8G Radeon Gigabyte, 8GB GDDR6, 128bits, RGB - GV-R76GAMING OC-8GD`,
            descricao: `Placa de Vídeo RX 7600 GAMING OC 8G
            O sistema de resfriamento WINDFORCE
            Possui três ventoinhas de lâmina exclusivas de 80 mm, rotação alternada, 5 tubos de calor de cobre composto tocando diretamente a GPU, ventoinha ativa 3D e resfriamento de tela, que juntos fornecem dissipação de calor de alta eficiência.
            
            Fusão RGB
            Com 16,7 milhões de opções de cores personalizáveis e vários efeitos de iluminação, você pode escolher qualquer efeito de iluminação ou sincronizar com outros dispositivos no GIGABYTE CONTROL CENTER.
            
            Resolução AMD Radeon
            O upscaler no driver com tecnologia FSR 1.0 eleva o desempenho em milhares de jogos. O upscaler no driver com tecnologia FSR 1.0 eleva o desempenho em milhares de jogos.
            `,
            valor: "R$ 1.699,99",
            url: "https://images.kabum.com.br/produtos/fotos/475647/placa-de-video-rx-7600-gaming-oc-8g-radeon-gigabyte-8gb-gddr6-128bits-rgb-gv-r76gaming-oc-8gd_1698435450_gg.jpg"
        },
    ]


    return (
        <React.Fragment>
            <Layout produtos={produtos}></Layout>
        </React.Fragment>
    )
}