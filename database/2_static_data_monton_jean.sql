SET NAMES utf8;

INSERT INTO `jungai_test`.`monton_jean`(`monton_id`, `monton_code`, `monton_name`)
VALUES
(1, 'monton_01', 'ไทยกัว1'),
(2, 'monton_02', 'ไทยกัว2'),
(3, 'monton_03', 'ไทยกัว3'),
(4, 'monton_04', 'ไทยกัว4'),
(5, 'monton_05', 'ไทยกัว5'),
(6, 'monton_06', 'ไทยกัว6'),
(7, 'monton_07', 'ไทยกัว7'),
(8, 'monton_08', 'ไทยกัว8'),
(9, 'monton_09', 'ไทยกัว9'),
(10, 'monton_10', 'ไทยกัว10');

INSERT INTO `jungai_test`.`monton_user`(`user_id`, `monton_id`, `name`)
VALUES
(1, 1, 'park jae ju'),
(2, 1, 'jungai'),
(3, 2, 'kim long teeth'),
(4, 3, 'kim bok juu');


INSERT INTO `jungai_test`.`monton_idol`(`idol_id`, `idol_name`, `user_id`)
VALUES
(1, 'iu', 1),
(2, 'iu', 2),
(3, 'iu', 3),
(4, 'rose', 1),
(5, 'rose', 2);

