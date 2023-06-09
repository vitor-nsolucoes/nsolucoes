import React from "react";
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaMobileAlt  } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";

function WebPlataform() {

  const cardInfo = [
    {
      id: 1,
      title: "Controle de Estoque",
      type: "development",
      image: "devices",
      text: "Com nosso sistema de Controle de Estoque, você tem a garantia de que seus produtos estarão sempre organizados e disponíveis. Tenha controle total sobre entrada e saída de produtos, evitando desperdícios e prejuízos."
    },
    {
      id: 2,
      title: "Gestão e Vendas",
      type: "development",
      image: "responsive",
      text: "Aumente a eficiência e a rentabilidade do seu negócio com nossas soluções de gestão e vendas, que permitem um controle total sobre suas operações. Nossos sistemas oferecem recursos como controle de estoque, gerenciamento financeiro e integração com plataformas de venda online."
    },
    {
      id: 3,
      title: "Gestão de Frotas",
      type: "development",
      image: "email",
      text: "Com nossa solução de Gestão de Frotas, você pode ter o controle total de todos os seus veículos, agendar manutenções preventivas, controlar combustível e muito mais. Aumente a eficiência da sua frota e economize dinheiro."
    },
  ]

  const cardIcon = [
    {
      icon: <FaMobileAlt className="products" size={35} />,
      title: "Responsividade",
      description: "Responsiva para sempre se adaptar a diferentes tamanhos de tela e dispositivos."
    },
    {
      icon: <AiFillThunderbolt className="pie" size={55} />,
      title: "Performance",
      description: "Ter um desempenho rápido e eficiente para garantir uma experiência de usuário satisfatória."
    },
    {
      icon: <FiLock className="performance" size={55} />,
      title: "Segurança",
      description: "Protegendo tanto os dados dos usuários quanto do próprio site contra possíveis ameaças."
    },
    {
      icon: <BiTargetLock  className="products" size={65} />,
      title: "Usabilidade",
      description: " a plataforma web deve ser fácil de usar e permitir que os usuários encontrem o que precisam com facilidade."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Plataformas Web"
          url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
          subtitle="Descubra como nossa plataforma web pode melhorar sua presença online e aumentar seus resultados"
          paragraph1="Na nossa agência de desenvolvimento de sites, somos especialistas em criar plataformas web incríveis para nossos clientes. Nós nos preocupamos em criar experiências únicas para cada usuário, levando em conta suas necessidades específicas. Utilizamos tecnologias de ponta para desenvolver plataformas web de alto desempenho, com interfaces amigáveis e design moderno."
          paragraph2="Tudo é feito pensando na usabilidade e na experiência do usuário final. Além disso, oferecemos uma ampla variedade de recursos personalizáveis, que permitem que nossos clientes criem uma plataforma web totalmente adaptada às suas necessidades específicas. Isso inclui desde a criação de layouts personalizados até a integração de recursos como formulários, chats e sistemas de pagamento."
          paragraph3="Nossa equipe altamente qualificada está sempre pronta para ajudar nossos clientes em todas as etapas do desenvolvimento da plataforma web, desde a concepção até a implementação e manutenção. Nós oferecemos um atendimento personalizado, que visa entender as necessidades de cada cliente e propor soluções sob medida para cada projeto. Se você está procurando uma plataforma web de alto desempenho e que proporcione uma experiência única para os seus usuários, entre em contato conosco e vamos conversar sobre como podemos ajudá-lo."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Plataformas Web" />

      <Techs work/>

      <Support copyright/>

    </Container>
  );
}

export default WebPlataform;
