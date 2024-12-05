INSERT INTO `user` (nome, email, tipo, senha, cpf) VALUES
('Admin User', 'admin@example.com', 'admin', 'senha123', '12345678901'),
('João Silva', 'joao.silva@example.com', 'colaborador', 'senha123', '12345678902'),
('Maria Santos', 'maria.santos@example.com', 'colaborador', 'senha123', '12345678903'),
('Ana Lima', 'ana.lima@example.com', 'admin', 'senha123', NULL),
('Carlos Mendes', 'carlos.mendes@example.com', 'colaborador', 'senha123', '12345678904'),
('Fernanda Souza', 'fernanda.souza@example.com', 'colaborador', 'senha123', '12345678905'),
('Lucas Almeida', 'lucas.almeida@example.com', 'admin', 'senha123', NULL),
('Patrícia Costa', 'patricia.costa@example.com', 'colaborador', 'senha123', '12345678906'),
('Roberto Nunes', 'roberto.nunes@example.com', 'colaborador', 'senha123', '12345678907'),
('Cláudia Ramos', 'claudia.ramos@example.com', 'admin', 'senha123', NULL);

-- Populando a tabela 'atividades'
INSERT INTO atividades (atividade) VALUES
('Atendimento ao cliente'),
('Gerenciamento de projetos'),
('Elaboração de relatórios'),
('Análise de dados'),
('Planejamento estratégico'),
('Suporte técnico'),
('Gestão de equipe'),
('Auditoria financeira'),
('Recrutamento e seleção'),
('Treinamento e desenvolvimento'),
('Manutenção de equipamentos'),
('Controle de estoque'),
('Desenvolvimento de software'),
('Criação de campanhas de marketing'),
('Gestão de contratos');

-- Populando a tabela 'colaborador'
INSERT INTO colaborador (nome, email, cpf, nascimento, admissao, desligamento, cargo) VALUES
('João Silva', 'joao.silva@empresa.com', 12345678901, '1990-01-15', '2020-06-01', NULL, 'Analista'),
('Maria Santos', 'maria.santos@empresa.com', 12345678902, '1988-04-22', '2019-09-15', NULL, 'Coordenadora'),
('Ana Lima', 'ana.lima@empresa.com', 12345678903, '1995-10-10', '2021-01-10', NULL, 'Assistente'),
('Carlos Mendes', 'carlos.mendes@empresa.com', 12345678904, '1985-05-30', '2018-03-20', '2023-04-01', 'Gerente');


-- Populando a tabela 'treinamento'
INSERT INTO treinamento (nome) VALUES
('Segurança no Trabalho'),
('Gestão de Conflitos'),
('Primeiros Socorros'),
('Comunicação Eficaz'),
('Atualização em Normas ISO'),
('Atendimento ao Cliente'),
('Sustentabilidade Empresarial'),
('Liderança e Gestão'),
('Treinamento Técnico em TI'),
('Capacitação em Ergonomia');

-- Populando a tabela 'requisito_treinamento'
INSERT INTO requisito_treinamento (id_atividade, id_treinamento) VALUES
(1, 6),  -- Atendimento ao cliente -> Atendimento ao Cliente
(2, 5),  -- Gerenciamento de projetos -> Atualização em Normas ISO
(3, 4),  -- Elaboração de relatórios -> Comunicação Eficaz
(4, 9),  -- Análise de dados -> Treinamento Técnico em TI
(5, 8),  -- Planejamento estratégico -> Liderança e Gestão
(6, 9),  -- Suporte técnico -> Treinamento Técnico em TI
(7, 8),  -- Gestão de equipe -> Liderança e Gestão
(8, 2),  -- Auditoria financeira -> Gestão de Conflitos
(9, 7),  -- Recrutamento e seleção -> Sustentabilidade Empresarial
(10, 8), -- Treinamento e desenvolvimento -> Liderança e Gestão
(11, 3), -- Manutenção de equipamentos -> Primeiros Socorros
(12, 5), -- Controle de estoque -> Atualização em Normas ISO
(13, 9), -- Desenvolvimento de software -> Treinamento Técnico em TI
(14, 7), -- Criação de campanhas de marketing -> Sustentabilidade Empresarial
(15, 5); -- Gestão de contratos -> Atualização em Normas ISO
