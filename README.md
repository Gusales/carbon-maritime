# 🌊 Carbon Maritime

![Node.js Version](https://img.shields.io/badge/Node.js-24%2B-339933?logo=node.js)
![Angular](https://img.shields.io/badge/Angular-18%2B-DD0031?logo=angular)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0%2B-47A248?logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)
![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

> **Sistema de classificação visual da pegada de carbono no transporte marítimo logístico.**
>
> Plataforma que converte dados operacionais de rotas marítimas em classificações visuais imediatas (semáforo verde, amarelo e vermelho), baseada na norma **ISO 14083:2023** e no **Carbon Intensity Indicator (CII)** da Organização Marítima Internacional (IMO).

---

## 📋 Conteúdos

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Como rodar](#-como-rodar)

---

## 💡 Sobre

O sistema resolve um problema real enfrentado por operadores de transporte marítimo: a ausência de ferramentas acessíveis para monitorar e interpretar a intensidade de carbono de suas operações logísticas.

A partir de variáveis operacionais como distância percorrida (milhas náuticas), tipo de embarcação, tipo de combustível e massa de carga transportada, o sistema calcula automaticamente o índice de intensidade de carbono (gCO₂/t·nm) e classifica cada rota em uma das três faixas do semáforo:

1. 🟢 **Verde** — Desempenho ambiental adequado (equivalente ao CII A ou B)
2. 🟡 **Amarelo** — Necessidade de atenção e otimização (equivalente ao CII C)
3. 🔴 **Vermelho** — Desempenho crítico, intervenção imediata necessária (equivalente ao CII D ou E)

---

## 🚀 Tecnologias

| Camada              | Tecnologia                           |
| :------------------ | :----------------------------------- |
| **Frontend**        | Angular 18+, TypeScript, TailwindCSS |
| **Backend**         | Go 1.22+                             |
| **Banco de Dados**  | MongoDB 7.0+                         |
| **Containerização** | Docker & Docker Compose              |

---

## ✨ Funcionalidade

| Funcionalidade              | Descrição                                                   | Status |
| :-------------------------- | :---------------------------------------------------------- | :----: |
| **Cadastro de Embarcações** | Registro de nome, tipo, porte, combustível e consumo médio  |   ✅   |
| **Cálculo de Rotas**        | Entrada de origem, destino, distância, embarcação e carga   |   ✅   |
| **Classificação Semáforo**  | Classificação visual imediata em verde, amarelo ou vermelho |   ✅   |
| **Índice ICO₂**             | Exibição do valor calculado em gCO₂/t·nm                    |   ✅   |
| **Histórico de Rotas**      | Consulta e filtragem de rotas por status ambiental          |   ✅   |
| **Dashboard**               | Visão geral das rotas adequadas, em atenção e críticas      |   ✅   |

---

## ⚡ Como rodar

### Pré-requisitos

- [Docker](https://www.docker.com/) e Docker Compose instalados.

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/carbon-maritime.git
   cd carbon-maritime
   ```

2. **Configure as variáveis de ambiente:**

   ```bash
   cp .env.example .env
   ```

3. **Suba o ambiente com Docker:**

   ```bash
   cd apps
   docker-compose up --build
   ```

   _Isso inicializa o backend, frontend e o banco de dados MongoDB._

4. **Acesse a aplicação:**
   - Frontend: `http://localhost:4200`
   - Backend: `http://localhost:8080`

---

## 📐 Metodologia de Cálculo

O índice de intensidade de carbono é calculado conforme a fórmula definida pela **ISO 14083:2023** e alinhada ao indicador **AER** do CII da IMO:

```
ICO₂ = (Consumo total de combustível × Fator de emissão Cf) ÷ (Capacidade de carga × Distância percorrida)
```

**Fatores de emissão por tipo de combustível (fixos):**

| Combustível                   | Fator de Emissão |
| :---------------------------- | :--------------- |
| HFO (Óleo Combustível Pesado) | 3,114 kgCO₂/kg   |
| MDO/MGO (Óleo Diesel Marinho) | 3,206 kgCO₂/kg   |
| LNG (Gás Natural Liquefeito)  | 2,750 kgCO₂/kg   |

---

## 📚 Referências Normativas

- **IMO (2023)** — EEXI and CII: ship carbon intensity and rating system
- **ISO 14083:2023** — Quantification and reporting of greenhouse gas emissions arising from transport chain operations
- **Smart Freight Centre / GLEC (2019)** — Framework for Logistics Emissions Accounting and Reporting
- **Chen et al. (2024)** — An Isochrone-Based Predictive Optimization for Efficient Ship Voyage Planning and Execution
