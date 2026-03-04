INSERT INTO users (name, role, login, password) VALUES
('Dispatcher', 'dispatcher', 'dispatcher', '123'),
('Master Ivan', 'master', 'master1', '123'),
('Master Alex', 'master', 'master2', '123');

INSERT INTO requests (client_name, phone, address, text_problem, status, assigned_to)
VALUES
('Иван Петров', '+79990001122', 'Москва, ул. Ленина 10', 'Не работает розетка', 'new', NULL),

('Мария Сидорова', '+79995554433', 'Москва, ул. Тверская 5', 'Протекает кран', 'assigned', 2),

('Алексей Смирнов', '+79997776655', 'Москва, ул. Пушкина 15', 'Не включается свет', 'in_progress', 3),

('Ольга Иванова', '+79998887766', 'Москва, ул. Гагарина 8', 'Сломан дверной замок', 'done', 2),

('Дмитрий Кузнецов', '+79991112233', 'Москва, ул. Мира 20', 'Не работает отопление', 'canceled', NULL);
