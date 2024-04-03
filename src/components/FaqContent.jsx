import styles from './FaqContent.module.scss'

import { CgMathMinus, CgMathPlus } from "react-icons/cg";

import { useState } from 'react';

const FaqContent = () => {
    const [faq, setFaq] = useState([
        {
            "pergunta": "Em quanto tempo meu projeto ficaria pronto?",
            "resposta": "O prazo de conclusão do projeto depende da sua complexidade e dos requisitos específicos. Após uma análise detalhada do escopo, podemos fornecer uma estimativa precisa do tempo necessário para concluir o projeto."
        },
        {
            "pergunta": "Quais são os custos envolvidos no desenvolvimento do meu projeto?",
            "resposta": "Os custos do projeto variam de acordo com a complexidade, tamanho e tempo necessário para conclusão. Após discutirmos os detalhes do projeto, forneceremos um orçamento transparente e personalizado."
        },
        {
            "pergunta": "Você pode trabalhar com o meu orçamento?",
            "resposta": "Sim, estamos abertos a discutir diferentes opções de pagamento e acomodar seu orçamento da melhor forma possível. Nos informe sobre suas restrições financeiras e trabalharemos juntos para encontrar uma solução adequada."
        },
        {
            "pergunta": "Como será a comunicação durante o desenvolvimento do projeto?",
            "resposta": "Manteremos uma comunicação regular e transparente durante todo o processo de desenvolvimento. Podemos nos comunicar por e-mail, telefone, videoconferência ou qualquer outra plataforma de sua preferência para garantir que você esteja sempre atualizado sobre o progresso do projeto."
        },
        {
            "pergunta": "Você oferece suporte após a conclusão do projeto?",
            "resposta": "Sim, estamos comprometidos em fornecer suporte contínuo após a conclusão do projeto. Se surgirem quaisquer problemas ou se você precisar de atualizações adicionais, estaremos disponíveis para ajudá-lo e garantir a funcionalidade contínua do seu projeto."
        },
        {
            "pergunta": "Você possui experiência em projetos semelhantes ao meu?",
            "resposta": "Sim, tenho experiência em uma variedade de projetos e estou confiante em minha capacidade de lidar com desafios similares ao seu. Posso compartilhar exemplos de trabalhos anteriores, se necessário."
        },
        {
            "pergunta": "Quais tecnologias você utiliza em seus projetos?",
            "resposta": "Minhas habilidades técnicas incluem [lista de tecnologias], mas estou sempre disposto a aprender e utilizar novas tecnologias, conforme necessário para atender às necessidades do projeto."
        },
        {
            "pergunta": "Como é feito o pagamento pelos seus serviços?",
            "resposta": "Normalmente, utilizo métodos de pagamento como [lista de métodos de pagamento], e o pagamento é geralmente dividido em marcos ou etapas específicas do projeto, conforme acordado entre ambas as partes."
        },
        {
            "pergunta": "Posso fazer alterações no projeto durante o desenvolvimento?",
            "resposta": "Sim, estou aberto a fazer alterações no projeto durante o desenvolvimento, desde que as alterações estejam dentro do escopo acordado inicialmente. Quaisquer alterações significativas podem afetar o prazo e o custo do projeto."
        },
        {
            "pergunta": "Como garantir a segurança e confidencialidade dos meus dados?",
            "resposta": "Levo a segurança e a confidencialidade dos dados dos clientes muito a sério. Implemento medidas de segurança rigorosas e estou disposto a assinar acordos de confidencialidade, se necessário, para garantir a proteção dos seus dados."
        }
    ])

    const [expandedItems, setExpandedItems] = useState(Array(faq.length).fill(false));

    const handleFaq = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section>
            <div className={styles.header}>
                <h1>FAQ</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.division}>
                    {faq.slice(0, 5).map((f, index) => (
                        <div className={styles.item} key={index} onClick={() => handleFaq(index)}>
                            <div className={styles.question}>
                                <p>{f.pergunta}</p>
                                {expandedItems[index] ? (
                                    <CgMathMinus />
                                ) : (
                                    <CgMathPlus />
                                )}
                            </div>
                            {expandedItems[index] && (
                                <div className={styles.answer}>{f.resposta}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.division}>
                    {faq.slice(5, 10).map((f, index) => (
                        <div className={styles.item} key={index} onClick={() => handleFaq(index + 5)}>
                            <div className={styles.question}>
                                <p>{f.pergunta}</p>
                                {expandedItems[index + 5] ? (
                                    <CgMathMinus />
                                ) : (
                                    <CgMathPlus />
                                )}
                            </div>
                            {expandedItems[index + 5] && (
                                <div className={styles.answer}>{f.resposta}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FaqContent