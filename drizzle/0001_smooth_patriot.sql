CREATE TABLE `event_registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`event_title` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`message` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `event_registrations_id` PRIMARY KEY(`id`)
);
