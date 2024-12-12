-- CreateTable
CREATE TABLE "categoria" (
    "id" BIGSERIAL NOT NULL,
    "tipo" CHAR(1),
    "valorlocacao" DOUBLE PRECISION,
    "modelos" TEXT,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contratolocacao" (
    "id" BIGSERIAL NOT NULL,
    "datalocacao" DATE,
    "datadevolucao" DATE,
    "valorcaucao" DOUBLE PRECISION,
    "valortotal" DOUBLE PRECISION,
    "status" VARCHAR(50),
    "veiculos" TEXT,
    "ocorrencias" TEXT,

    CONSTRAINT "contratolocacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manutencao" (
    "id" BIGSERIAL NOT NULL,
    "descricao" TEXT,
    "datamanutencao" DATE,
    "valormanutencao" DOUBLE PRECISION,

    CONSTRAINT "manutencao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marca" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(255),
    "modelos" TEXT,

    CONSTRAINT "marca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modelo" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(255),
    "anomodelo" DATE,
    "qtmodelo" INTEGER,
    "veiculos" TEXT,

    CONSTRAINT "modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ocorrencia" (
    "id" BIGSERIAL NOT NULL,
    "descricao" TEXT,
    "dataocorrencia" DATE,
    "valorocorrencia" DOUBLE PRECISION,

    CONSTRAINT "ocorrencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "id" BIGSERIAL NOT NULL,
    "data" DATE,
    "valorpago" DOUBLE PRECISION,
    "formapagamento" VARCHAR(50),
    "contrato" VARCHAR(255),

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id" BIGSERIAL NOT NULL,
    "placa" VARCHAR(20),
    "chassi" VARCHAR(50),
    "anofabricacao" DATE,
    "cor" VARCHAR(50),
    "marca" VARCHAR(255),
    "modelo" VARCHAR(255),
    "status" VARCHAR(50),
    "manutencao" TEXT,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id")
);
