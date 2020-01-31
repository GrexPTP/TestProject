/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 8.0.17 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `dbo_failed_jobs` */

DROP TABLE IF EXISTS `dbo_failed_jobs`;

CREATE TABLE `dbo_failed_jobs` (
  `id` bigint(20) NOT NULL,
  `connection` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `queue` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_failed_jobs` */

/*Table structure for table `dbo_migrations` */

DROP TABLE IF EXISTS `dbo_migrations`;

CREATE TABLE `dbo_migrations` (
  `id` int(11) NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_migrations` */

insert  into `dbo_migrations`(`id`,`migration`,`batch`) values 
(1,'2014_10_12_000000_create_users_table',1),
(2,'2014_10_12_100000_create_password_resets_table',1),
(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),
(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),
(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
(6,'2016_06_01_000004_create_oauth_clients_table',1),
(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
(8,'2019_08_19_000000_create_failed_jobs_table',1),
(1002,'2020_01_20_150249_add_api_token_users',2);

/*Table structure for table `dbo_oauth_access_tokens` */

DROP TABLE IF EXISTS `dbo_oauth_access_tokens`;

CREATE TABLE `dbo_oauth_access_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `scopes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_oauth_access_tokens` */

insert  into `dbo_oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values 
('01905575f875d679ce5c2b5cc5b9c57b81a75e4ead8ae0033548e54ff278b1b61be0db9169440e0a',1,1010,'admin@admin.com','[]',0,'2020-01-28 06:56:37.497000','2020-01-28 06:56:37.497000','2021-01-28 06:56:37.497000'),
('030adf85a9eb00481c2a9e0bfa23321f3f730aa883c8e40d2f3c18be8680a206eda25672b0e92faa',1,1,'MyApp','[]',0,'2020-01-20 15:52:07.273000','2020-01-20 15:52:07.273000','2021-01-20 15:52:07.273000'),
('04ba707aeb5925ce24639d8f93d24c769a1fb677e2ddb8da0d8859008e7912e31b7f05229ac146d4',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:07.380000','2020-01-22 11:08:07.380000','2021-01-22 11:08:07.380000'),
('04f237e94c7d7773f0092060a83887b68b887afcc9d7f73e52ec840431bd619a48a94fcf00dd4ca5',1,1002,'admin@admin.com','[]',0,'2020-01-26 14:58:16.600000','2020-01-26 14:58:16.600000','2021-01-26 14:58:16.600000'),
('076c41a1f7cbbca297ac570d4434e223d581279d7aca18d38743c77f36ee8f21916b60156785a507',1,1002,'admin@admin.com','[]',0,'2020-01-27 16:05:06.263000','2020-01-27 16:05:06.263000','2021-01-27 16:05:06.263000'),
('08ea50eb8280479c9691e26367ec1d2057d311dbe3079091131144a125a062cfbb0293282acd196f',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:59:38.613000','2020-01-28 03:59:38.613000','2021-01-28 03:59:38.613000'),
('0a968e6a56c8200c091051e0cb9b6367c56d77e889f9cc7a2e2a4652d4e356d4d684f4a6a53887be',1,1002,'admin@admin.com','[]',0,'2020-01-27 16:09:03.407000','2020-01-27 16:09:03.407000','2021-01-27 16:09:03.407000'),
('11548d3f4cf58d770d627554be1199593a261ce7ace71aa5ee5b8de1369763a3749c322d4e010ae7',1,1002,'admin@admin.com','[]',0,'2020-01-23 10:44:14.050000','2020-01-23 10:44:14.050000','2021-01-23 10:44:14.050000'),
('12ff4efd0c0b813a3eaaa12fb8dd4f2791d1bc665292451a9f389fcac2f86978e8d55cd5383030d1',1,1002,'admin@admin.com','[]',0,'2020-01-23 12:09:56.447000','2020-01-23 12:09:56.447000','2021-01-23 12:09:56.447000'),
('1411612f63755ea580ee4ac317c45e452b9802ac438fb508a2dc277b65f508d23690262c95590439',1,1002,'admin@admin.com','[]',0,'2020-01-25 14:36:03.273000','2020-01-25 14:36:03.273000','2021-01-25 14:36:03.273000'),
('164d07ee8ec30943a09dec61744015b20cba1d2cc5f5d43cbde76efa969d6bda92f7150781d60c63',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:45:34.947000','2020-01-28 03:45:34.947000','2021-01-28 03:45:34.947000'),
('169382de42ca358bb4d7b7bea8aba790a54f34c4b1d3d91121fa3ab5d24e74205b3d1fda6f87853a',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:10.120000','2020-01-22 11:08:10.120000','2021-01-22 11:08:10.120000'),
('16e914b77d5de4b1f0ee1d55b3118facb073cbad3654e1f5c1e0a1a3add8783c9347e318d7522817',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:23:31.830000','2020-01-28 04:23:31.830000','2021-01-28 04:23:31.830000'),
('193d09dd75891f98f8cbdd242cfd83226fee05bfad1a3bb8f0dc4420a0b7cdbc6ef97f7e3f57a53d',1,1010,'admin@admin.com','[]',0,'2020-01-30 13:45:46.300000','2020-01-30 13:45:46.300000','2021-01-30 13:45:46.300000'),
('1c810b6a84066ff0dc5430a5a85237c302e643e4751ee494140c60d75b7f7f677bdbf47279cec253',1,1002,'admin@admin.com','[]',0,'2020-01-27 16:12:44.377000','2020-01-27 16:12:44.377000','2021-01-27 16:12:44.377000'),
('1d9cf61f1b194a09574ab4019f5e657b8921e1ae673d587aa8ef08ba732ad974f33489d30aba5af9',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:07:08.797000','2020-01-28 04:07:08.797000','2021-01-28 04:07:08.797000'),
('1f182df0f7bfe03589b13e57fee0d10333df43fa805fd9b927b64278ddc7106eff66085a3a0ea812',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:44:11.737000','2020-01-23 17:44:11.737000','2021-01-23 17:44:11.737000'),
('1f67fb629b0ee13181f899820d5510cc49119a1b5a9e29108fb8f4d1081179eb43042e8d7e0c41af',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:18.963000','2020-01-22 11:08:18.963000','2021-01-22 11:08:18.963000'),
('1f8acd1b1159463d829e1cca72c675cf3e692806ce5b6f1c53c423ecbc95c417a973f044b7fb9024',1,1002,'admin@admin.com','[]',0,'2020-01-24 13:35:23.797000','2020-01-24 13:35:23.797000','2021-01-24 13:35:23.797000'),
('20f29000497fc0faa0584fd22b372a2eea090758e7384a3e76919e0fbe66690fb76fd94d7c24a247',1,1002,'admin@admin.com','[]',0,'2020-01-23 10:33:40.017000','2020-01-23 10:33:40.017000','2021-01-23 10:33:40.017000'),
('21a523c756dc385e6a33529911eb318c944133304bdf666ddada582969966c16186c442434d9e775',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:59:33.803000','2020-01-23 16:59:33.803000','2021-01-23 16:59:33.803000'),
('245173bfa5b5a9a62183cd282a2c64e975768aed8cd96313400e442469790901eeecb6f041fc2986',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:55:10.813000','2020-01-28 03:55:10.813000','2021-01-28 03:55:10.813000'),
('278d54be75503f8363a904f0ec197ad907765a33b5b6f37bad405f7113c2d251ecfb0edf12312a6d',1,1002,'admin@admin.com','[]',0,'2020-01-24 03:17:48.420000','2020-01-24 03:17:48.420000','2021-01-24 03:17:48.420000'),
('2977de76f9911bde8b6843c08b7a9cca86228fbc49c0669307a5359a5028dcc2ab2bc27f24dcd4d2',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:45:53.023000','2020-01-28 03:45:53.023000','2021-01-28 03:45:53.023000'),
('32e83e37bd56f3f394336f6eeecfb5e6e3700eb3ad3f91ce8fa3970766c6b29060cb39fe7480d1f2',3,1002,'test@gmail.com','[]',0,'2020-01-22 08:51:52.790000','2020-01-22 08:51:52.790000','2021-01-22 08:51:52.790000'),
('34b8d8e79ce345a6f449ddbceb39a956ee00457107f099145d35003653d1f4466d6081df7cb9d213',1,1002,'admin@admin.com','[]',0,'2020-01-25 16:59:09.207000','2020-01-25 16:59:09.207000','2021-01-25 16:59:09.207000'),
('34b8e5dee6252478a8a7673b94b2463335cc785cdc8ea2088b491270da902681d49ede754f37522b',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:47:06.257000','2020-01-23 16:47:06.257000','2021-01-23 16:47:06.257000'),
('38f2d44ed89d8b114963ef755da38ceb5ca73ce00348e67c6d3a958a6a54d91a77b619d44a3e9f22',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:10.527000','2020-01-22 11:08:10.527000','2021-01-22 11:08:10.527000'),
('4bff4b0a0304c00301bf87465901c2ce3023a6732a0eceeffe7935dd1c84a192a68ab4cbfc99c6c4',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:08:33.077000','2020-01-23 17:08:33.077000','2021-01-23 17:08:33.077000'),
('4c97ab61629638cd902a65b10cc716910d3f18fe00f3a4388ed7765efdf97efd7241631c5372b639',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:34:39.517000','2020-01-23 17:34:39.517000','2021-01-23 17:34:39.517000'),
('53a60d00e82ca106a445b113730664dca13637f9e424ef64387f8793e92ae554b82557aadbe745df',1,1002,'admin@admin.com','[]',0,'2020-01-24 04:13:44.417000','2020-01-24 04:13:44.417000','2021-01-24 04:13:44.417000'),
('5b711936f638430a5283f82cd5d83917dca2134ecd05e886aa539a4fc6e829c7ba57366a22cc2b02',1,1010,'admin@admin.com','[]',0,'2020-01-28 09:01:53.713000','2020-01-28 09:01:53.713000','2021-01-28 09:01:53.713000'),
('5cb02329f045410db9af7b1aff888e55962bcf9b021480baee42e7b022e8ce3f11e42635ccf7048d',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:45:23.130000','2020-01-23 16:45:23.130000','2021-01-23 16:45:23.130000'),
('5f2e49eebe8b2d891ea4ef53b5f23902c481bbc1e533981f1dfbc37d959cc92f72eb04b55e1bf0d2',1,1002,'admin@admin.com','[]',0,'2020-01-23 10:42:22.413000','2020-01-23 10:42:22.413000','2021-01-23 10:42:22.413000'),
('60bdeb55dc0311828187b77b4bdb1898dd96a8ac6bf650f269acff05837cd201741e497c159c86b1',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:09.173000','2020-01-22 11:08:09.173000','2021-01-22 11:08:09.173000'),
('62ec5206de7eb7a6da7896aef786773e7e5c879a740300358fa292ef2dad1d99d057044d558bb2cf',1,1010,'admin@admin.com','[]',0,'2020-01-28 08:41:57.350000','2020-01-28 08:41:57.350000','2021-01-28 08:41:57.350000'),
('63164fd052c433d1201e15306547c27072ac06aa6a8ff4e73fca8451045de66bdb0ad5cba2a0e467',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:49:49.707000','2020-01-23 17:49:49.707000','2021-01-23 17:49:49.707000'),
('643ed55b5bb97f5ced9dacff0d86c99cfb918a5d9ab7a59ace6e095d3eebce90b607d3b851ef7c20',1,1002,'admin@admin.com','[]',0,'2020-01-24 09:26:47.347000','2020-01-24 09:26:47.347000','2021-01-24 09:26:47.347000'),
('674c3edc7e79534a4f4a56e421f28577c78596dcf8d3455153c4c016dbecd643314ba291ddccd11f',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:37:19.207000','2020-01-23 17:37:19.207000','2021-01-23 17:37:19.207000'),
('67b57fc9579f8968ef6a1069356965b9a61d4b8f6a9654f62dc76f6a15d23e7567aa675583daefef',1,1002,'admin@admin.com','[]',0,'2020-01-23 11:58:55.767000','2020-01-23 11:58:55.767000','2021-01-23 11:58:55.767000'),
('684207c07329aea053fec76c0bfd4ce821a745df9a875c6426d79e473a5c603db53f1523585ee19a',3,1002,'test@test.com','[]',0,'2020-01-23 10:12:26.100000','2020-01-23 10:12:26.100000','2021-01-23 10:12:26.100000'),
('6b104f228ef5557e98753154fb2f8e5dbcba6de4e1b66c02ea50f35beb90ba7e7d92c142d4acf8fa',1,1010,'admin@admin.com','[]',0,'2020-01-28 09:07:08.983000','2020-01-28 09:07:08.983000','2021-01-28 09:07:08.983000'),
('6d19efe2cb29b17deeafc82f0f17c208673ba8b49fc6148c5b1a585897c9cb9b9bed070c4b0e0aed',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:40:18.963000','2020-01-28 04:40:18.963000','2021-01-28 04:40:18.963000'),
('6f7653212811206f78e7b18bc5249299d3f34b3628112da53a5207f6bb95b4a5c7b07951713b03f4',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:09.610000','2020-01-22 11:08:09.610000','2021-01-22 11:08:09.610000'),
('6fc1f31be4d13bc660a2aae754300fb1b75160f8de225c0a5dc6b19b7b7a2d96673a49f89205a127',1,1002,'admin@admin.com','[]',0,'2020-01-27 16:08:51.830000','2020-01-27 16:08:51.830000','2021-01-27 16:08:51.830000'),
('702491db5b5f9f3832b46a51888305cd36ad65aa6ee6b4eb7454cf83d700dfb0ee02f53efc634c99',1,1006,'admin@admin.com','[]',0,'2020-01-28 05:24:30.547000','2020-01-28 05:24:30.547000','2021-01-28 05:24:30.547000'),
('755fc7995256e8948c711c4edffbbbb162a003242ee698ef3b0f6ec675f6dd8196b6337c57e8a15c',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:00:48.593000','2020-01-23 17:00:48.593000','2021-01-23 17:00:48.593000'),
('77b77521484ffa90ed7a45f77a98303f0b513f7f31df30bfad1d50d8b24f68668292acb92038ffe7',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:47:15.227000','2020-01-23 16:47:15.227000','2021-01-23 16:47:15.227000'),
('791ffc6ddc33f216edd86d0988f6da937cb12d1f5a8aab37057fe7c192cefebd966177d70056164e',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:10:19.313000','2020-01-23 17:10:19.313000','2021-01-23 17:10:19.313000'),
('7e67b7f91cd5d82af5d1ccea98e0e62a2760d513ba3abf76dd9d7603bf62807eae023540dc531e35',1,1002,'admin@admin.com','[]',0,'2020-01-27 09:49:51.977000','2020-01-27 09:49:51.977000','2021-01-27 09:49:51.977000'),
('7fcde9931d9f9759ad89455fc5f66c7c4bcc23e1a1d4e9ecee2170cac8145289623b8e627d776ca5',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:48:24.067000','2020-01-23 16:48:24.067000','2021-01-23 16:48:24.067000'),
('85ab226d44da72db651c41cbe0dd4bb50335a71db5aaf99bbc7bb4708c6275f92ffc140e68a61699',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:09:06.347000','2020-01-22 11:09:06.347000','2021-01-22 11:09:06.347000'),
('85b6bbfc489a8ab380830bbdb6e6f69cb7667508214f66491f7bb8b3413b6bf3b604f849b05e238c',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:24:51.013000','2020-01-23 17:24:51.013000','2021-01-23 17:24:51.013000'),
('88f81d70d4c805e168bfc8053f662b0f0850af2b44df7a3706f3ca72a8c8187d11320d92ba753adf',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:03:33.100000','2020-01-23 17:03:33.100000','2021-01-23 17:03:33.100000'),
('8945bad6e30cbecb2ace9e6dc2ebb0b3da96bf575fb0150d1c8d8332d9d95042eef380e64b487273',1,1010,'admin@admin.com','[]',0,'2020-01-30 13:39:39.817000','2020-01-30 13:39:39.817000','2021-01-30 13:39:39.817000'),
('89ba25ad9e398ccee93c54b81ef9af9072590b42b67cbbdcdedfd03232c16c7bd86be8a93e9e682c',1,1010,'admin@admin.com','[]',0,'2020-01-28 07:25:40.013000','2020-01-28 07:25:40.013000','2021-01-28 07:25:40.013000'),
('8ac8458f2bc92806505c8f8943cf7bb184b88cf23966ac30fcd93277b185b7716a6e6621ce7e6216',1,1002,'admin@admin.com','[]',0,'2020-01-24 13:35:39.150000','2020-01-24 13:35:39.150000','2021-01-24 13:35:39.150000'),
('92ffaf3546f24b7cd36ea3141040807e40998f2e6719863e96a846903b4570da4506d3482ee0c800',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:09.827000','2020-01-22 11:08:09.827000','2021-01-22 11:08:09.827000'),
('9484274c71a90bf0b8b46d93366b8a244a52b152f2adb54cc4cd8d20dd837e41645876a5d3dbe15e',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:47:06.570000','2020-01-28 03:47:06.570000','2021-01-28 03:47:06.570000'),
('952de5fc98f382ecaf4de7861d937bd3dddb6182a8206e6c0e53d11cac7087a6b653591cb4069302',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:35:37.023000','2020-01-23 17:35:37.023000','2021-01-23 17:35:37.023000'),
('9acff9d5edb8248ce41aa55fe2875728c4cd249ac5f75979ff8029a85f5570ce7852221ddf210820',1,1008,'admin@admin.com','[]',0,'2020-01-28 06:48:18.070000','2020-01-28 06:48:18.070000','2021-01-28 06:48:18.070000'),
('9bd15136aafc52dc7dbbafac0cf4d77e452956ce1a210d595f87f7f9610969def34a0de9e863bf8d',1,1002,'admin@admin.com','[]',0,'2020-01-22 11:08:10.317000','2020-01-22 11:08:10.317000','2021-01-22 11:08:10.317000'),
('9e387f182e440e32e278d4d083006dbd9e78a7d395851df7d1a4cf61e2aa3ca63e5fb33ad533dde6',1,1002,'admin@admin.com','[]',0,'2020-01-24 13:15:24.457000','2020-01-24 13:15:24.457000','2021-01-24 13:15:24.457000'),
('a0ef80b4d4b9f87fa1d70febe7189ca86ddc788f3ae1f2d571f4857323695bb985936fc65e999130',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:34:37.537000','2020-01-23 17:34:37.537000','2021-01-23 17:34:37.537000'),
('a17df696d7f7c30afd05b8e91fb5f837ed0a69b47f0fb1d9b58747bdf7de832612c5636aefa26d6b',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:36:19.917000','2020-01-28 04:36:19.917000','2021-01-28 04:36:19.917000'),
('a3f0e5c7c5c53b79518bd06dc3e0403ee60e9370725fd2df7c02c3e67f078b7c18b2639ca20c3bf8',1,1010,'admin@admin.com','[]',0,'2020-01-31 13:51:24.963000','2020-01-31 13:51:24.963000','2021-01-31 13:51:24.963000'),
('a61a96f8b5c97196f6c777a467269076ff2c73f8fbdb5ef01ac282f072d3ca63db42648a98f4025c',1,1002,'admin@admin.com','[]',0,'2020-01-27 12:51:31.687000','2020-01-27 12:51:31.687000','2021-01-27 12:51:31.687000'),
('a9acc86299e7782702c22e938e62bcae58e177cf98b364b86e1bbbc24b92bedf703b321995dcfb46',1,1008,'admin@admin.com','[]',0,'2020-01-28 06:22:36.410000','2020-01-28 06:22:36.410000','2021-01-28 06:22:36.410000'),
('abfe0eea94b1cf19fdd6cb8f62ad6d85c3b5a1d61a41af5ace8ab5fc9fab0cd32af4d4c69bc95af1',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:00:59.490000','2020-01-23 17:00:59.490000','2021-01-23 17:00:59.490000'),
('ac8a97c4121b89f4e0cb8310eb0c81594207424bc5413312a1671da832ae9e2ce91787f6079dc871',3,1002,'test@gmail.com','[]',0,'2020-01-22 08:51:23.723000','2020-01-22 08:51:23.723000','2021-01-22 08:51:23.723000'),
('acf7208209ba9db74620a76ed34a64c9447fa38107ee4dd275d94ed2d831a782997a8d10c5aef4b9',4,1002,'user@user.com','[]',0,'2020-01-27 10:00:53.773000','2020-01-27 10:00:53.773000','2021-01-27 10:00:53.773000'),
('b0429b24f46cb372d66baa7eb2c8113cfed3e75497b4e728355edff018cd3c36a27fab0e27233499',1,1002,'admin@admin.com','[]',0,'2020-01-27 08:53:13.933000','2020-01-27 08:53:13.933000','2021-01-27 08:53:13.933000'),
('b072e30f04143d083cf297e02d71ee7e715a8522113e66873f017a3b7f8d1289c0fe3820f05a4e34',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:08:13.237000','2020-01-23 17:08:13.237000','2021-01-23 17:08:13.237000'),
('b2e2c2293b2eea9ad2fb565af0c9883ff0474ffca7e8c08d6d339947e6457b4197bb910df8b36a51',1,1002,'admin@admin.com','[]',0,'2020-01-24 13:13:47.847000','2020-01-24 13:13:47.847000','2021-01-24 13:13:47.847000'),
('b55b04c943f37425622cf402c19a1cfb416d4d877a6d82752b1fd94d39764ba55c1b403bda7ffbb3',1,1010,'admin@admin.com','[]',0,'2020-01-30 14:02:28.360000','2020-01-30 14:02:28.360000','2021-01-30 14:02:28.360000'),
('b6c2bf7e3daad68018e51977e340505083b1dddaf07fd416c6296d243a44b738414e8e3636bee81d',1,1002,'admin@admin.com','[]',0,'2020-01-28 03:58:03.003000','2020-01-28 03:58:03.003000','2021-01-28 03:58:03.003000'),
('b707da665a2d1d862911903ba81670f053739bbca8da3f4a53b2e587d11608a487ba98b82d59c095',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:24:41.343000','2020-01-28 04:24:41.343000','2021-01-28 04:24:41.343000'),
('b7da3151d58ac90beda3a4c76ad814b54c92eb42c37c11ea45ac313cb60c79069f69ce8dca854e80',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:19:58.430000','2020-01-28 04:19:58.430000','2021-01-28 04:19:58.430000'),
('b9974cf4fd78cc6ea89f9443d3f1f96732a11dbc9ba054063929d09afccbe2bcd05ca24d2b30a28c',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:36:39.953000','2020-01-23 17:36:39.953000','2021-01-23 17:36:39.953000'),
('be39c2595c4acd72faeafef80800f7bf754f8081513f2893ca8c34231ad54731f237c197de49249b',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:00:04.720000','2020-01-23 17:00:04.720000','2021-01-23 17:00:04.720000'),
('c072511947d8b88e291c38861adff5076c4f0ccde78031745ba47292b0a305f23fcbe577b7f2d988',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:52:44.670000','2020-01-23 16:52:44.670000','2021-01-23 16:52:44.670000'),
('c1996e9a5fed6f248a71790746281f1b662e51ab954a74c8203cbdaabeacccb5cb5930d1c3123e33',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:47:44.707000','2020-01-23 17:47:44.707000','2021-01-23 17:47:44.707000'),
('c229d427f7127ca7afc2178e7b1600078788120b43c4471e4452dedddb41ec20f95d54740dc10423',1,1002,'admin@admin.com','[]',0,'2020-01-23 16:43:34.583000','2020-01-23 16:43:34.583000','2021-01-23 16:43:34.583000'),
('c34c765b9e62f09071b578af2586bc686105203a230a15219b41d2c3c028cd1cef6efd387c95d692',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:18:31.527000','2020-01-28 04:18:31.527000','2021-01-28 04:18:31.527000'),
('c37aa5c49d1013fd5761767584485132e2815ae90839304526e95c6192077493ea22c382a58a0c63',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:09:00.250000','2020-01-23 17:09:00.250000','2021-01-23 17:09:00.250000'),
('c4c729ba24861597e8d0b40d733d929830e419b6f871beb59844bb93e76ad3a955114eb75fb642e3',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:01:53.253000','2020-01-23 17:01:53.253000','2021-01-23 17:01:53.253000'),
('c7f5f4e77540c2f4fd40116549afdf76f36e376df5c816daa6e5a44d9ca90b169719692d2c705639',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:50:22.340000','2020-01-23 17:50:22.340000','2021-01-23 17:50:22.340000'),
('c9cdeddc8b9a8339a3fa30a2dfc39b96dbc89db990c0da2e33aa71211f16ad2b5ead4dd768712e0f',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:49:01.367000','2020-01-23 17:49:01.367000','2021-01-23 17:49:01.367000'),
('cd3ae3a0a0fe83f8e1e648e481b7cbeb0f25082fd5764f1d41a0d07fa9bfe0a4cf9f3cdd4b98c70c',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:34:23.277000','2020-01-23 17:34:23.277000','2021-01-23 17:34:23.277000'),
('cd7ddebf12788e5402ee743a41a90e9d50f35fcb5dd81c0da9ceb107efe177da685ec9d3affc5f87',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:13:43.347000','2020-01-28 04:13:43.347000','2021-01-28 04:13:43.347000'),
('cf5ad62a7ecb8a98b7a896c73b0f5cd391224bf4a34abda05a4504048f1a906e801af4c27a3c6dcc',1,1002,'admin@admin.com','[]',0,'2020-01-26 15:31:54.017000','2020-01-26 15:31:54.017000','2021-01-26 15:31:54.017000'),
('ded09cb99eca914e0ddceb561597a5d54b9436c58aa945c6161cfe4133df4ff9c3299b764e4bc1e8',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:19:31.817000','2020-01-28 04:19:31.817000','2021-01-28 04:19:31.817000'),
('df9e0ecc7fe3e7623ebc84a84f3527feba3a68a222133de007510e5791f293fbbc394bc421348b37',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:16:55.547000','2020-01-28 04:16:55.547000','2021-01-28 04:16:55.547000'),
('ed6ed534a27e4dadbeb2f71d2cfb0bf6923a21b003b6b1d78aff8c83458ce7182e2074bcf04d8ae1',1,1002,'admin@admin.com','[]',0,'2020-01-23 17:10:12.630000','2020-01-23 17:10:12.630000','2021-01-23 17:10:12.630000'),
('f1659f68eea8e7d1f4307f40e5f6909677381ce08e1317861fd919d541a86af7f54dec60f1cc5b3a',1,1002,'admin@admin.com','[]',0,'2020-01-27 08:53:14.843000','2020-01-27 08:53:14.843000','2021-01-27 08:53:14.843000'),
('f2a2b5496d131ae51d1e3b8f05f803bc5da9c9123923d9b80dc2f8d6dfa333d48a43cb0279521153',1,1002,'admin@admin.com','[]',0,'2020-01-23 11:57:25.910000','2020-01-23 11:57:25.910000','2021-01-23 11:57:25.910000'),
('f3f8c93f52228314f74de8a5a658d1da5bebec19ccddbde911638ba2a98a3d119855fa0824eb4c9e',1,1,'MyApp','[]',0,'2020-01-20 15:21:52.783000','2020-01-20 15:21:52.783000','2021-01-20 15:21:52.783000'),
('f4340d600ed8c556c22bc36a9539d93e8fc5572c26a3f2ccf838e36346f52ba638c46c0756dc7111',1,1002,'admin@admin.com','[]',0,'2020-01-28 04:05:11.017000','2020-01-28 04:05:11.017000','2021-01-28 04:05:11.017000');

/*Table structure for table `dbo_oauth_auth_codes` */

DROP TABLE IF EXISTS `dbo_oauth_auth_codes`;

CREATE TABLE `dbo_oauth_auth_codes` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_oauth_auth_codes` */

/*Table structure for table `dbo_oauth_clients` */

DROP TABLE IF EXISTS `dbo_oauth_clients`;

CREATE TABLE `dbo_oauth_clients` (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `secret` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `redirect` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_oauth_clients` */

insert  into `dbo_oauth_clients`(`id`,`user_id`,`name`,`secret`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values 
(1,NULL,'Laravel Personal Access Client','w6cQyFgGGSQnDVsYY76B2JVzchWrRu1kFtIY9oIS','http://localhost',1,0,0,'2020-01-19 15:14:56.030000','2020-01-19 15:14:56.030000'),
(2,NULL,'Laravel Password Grant Client','2Y4tKZoONnmN5Pi2Kg7bFrjTQw74fWJCoFdcrE23','http://localhost',0,1,0,'2020-01-19 15:14:56.277000','2020-01-19 15:14:56.277000'),
(1002,NULL,'Laravel Personal Access Client','mHjJq5PaFwnf6fQ8JTLROuvYjJntg1SDYzFR415F','http://localhost',1,0,0,'2020-01-22 08:36:33.833000','2020-01-22 08:36:33.833000'),
(1003,NULL,'Laravel Password Grant Client','aV2KA8oKQwcMExWkdnKBoM488UgV3AUCnhgW5d6c','http://localhost',0,1,0,'2020-01-22 08:36:34.757000','2020-01-22 08:36:34.757000'),
(1004,NULL,'Laravel Personal Access Client','7zcFxQfQcSUaSCSBZoGoDytfC3K6m3saJQm9492q','http://localhost',1,0,0,'2020-01-28 05:19:34.117000','2020-01-28 05:19:34.117000'),
(1005,NULL,'Laravel Password Grant Client','KT4zqF14f0qFYxL41HUV5ws9ognts7BZj755F2Ap','http://localhost',0,1,0,'2020-01-28 05:19:34.763000','2020-01-28 05:19:34.763000'),
(1006,NULL,'Laravel Personal Access Client','dG5cLgSpa8A8aITOWwcJBmma9dpiHNeTlInwoLqk','http://localhost',1,0,0,'2020-01-28 05:19:40.557000','2020-01-28 05:19:40.557000'),
(1007,NULL,'Laravel Password Grant Client','pLg0SU0N9hrUGGrTNvNaIues1FkPRx09np08FN58','http://localhost',0,1,0,'2020-01-28 05:19:40.617000','2020-01-28 05:19:40.617000'),
(1008,NULL,'Laravel Personal Access Client','JiCxqJJbNDBSiFpvowa2COm9JqkKfYw760sKr1vY','http://localhost',1,0,0,'2020-01-28 05:36:01.290000','2020-01-28 05:36:01.290000'),
(1009,NULL,'Laravel Password Grant Client','98OINR9hlWj6DmdvApKMGLrbDLLANDuTgVl2zVj0','http://localhost',0,1,0,'2020-01-28 05:36:01.350000','2020-01-28 05:36:01.350000'),
(1010,NULL,'Laravel Personal Access Client','yYRZxb3NMNK6r2rqpNz4UVmOC2ZcEVJHI1RsQA4D','http://localhost',1,0,0,'2020-01-28 06:53:35.573000','2020-01-28 06:53:35.573000');

/*Table structure for table `dbo_oauth_personal_access_clients` */

DROP TABLE IF EXISTS `dbo_oauth_personal_access_clients`;

CREATE TABLE `dbo_oauth_personal_access_clients` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_oauth_personal_access_clients` */

insert  into `dbo_oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values 
(1,1,'2020-01-19 15:14:56.240000','2020-01-19 15:14:56.240000'),
(2,1002,'2020-01-22 08:36:34.717000','2020-01-22 08:36:34.717000'),
(3,1004,'2020-01-28 05:19:34.710000','2020-01-28 05:19:34.710000'),
(4,1006,'2020-01-28 05:19:40.600000','2020-01-28 05:19:40.600000'),
(5,1008,'2020-01-28 05:36:01.330000','2020-01-28 05:36:01.330000'),
(6,1010,'2020-01-28 06:53:35.887000','2020-01-28 06:53:35.887000');

/*Table structure for table `dbo_oauth_refresh_tokens` */

DROP TABLE IF EXISTS `dbo_oauth_refresh_tokens`;

CREATE TABLE `dbo_oauth_refresh_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `access_token_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_oauth_refresh_tokens` */

/*Table structure for table `dbo_password_resets` */

DROP TABLE IF EXISTS `dbo_password_resets`;

CREATE TABLE `dbo_password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_password_resets` */

/*Table structure for table `dbo_roles` */

DROP TABLE IF EXISTS `dbo_roles`;

CREATE TABLE `dbo_roles` (
  `id` bigint(20) NOT NULL,
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_roles` */

insert  into `dbo_roles`(`id`,`role`) values 
(1,'Admin'),
(2,'Employee'),
(3,'User');

/*Table structure for table `dbo_users` */

DROP TABLE IF EXISTS `dbo_users`;

CREATE TABLE `dbo_users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email_verified_at` datetime(6) DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `phone` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_number` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `avartar` longtext,
  `front_id` longtext,
  `back_id` longtext,
  `address` longtext,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `FK_users_roles` (`role_id`),
  CONSTRAINT `FK_users_roles` FOREIGN KEY (`role_id`) REFERENCES `dbo_roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `dbo_users` */

insert  into `dbo_users`(`id`,`name`,`email`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`,`phone`,`id_number`,`avartar`,`front_id`,`back_id`,`address`,`role_id`) values 
(1,'Admin Edited','admin@admin.com',NULL,'$2y$10$8OdX.eocl3HCd2pbpobc3.PEePI6xuTlIrDjwYSt1wikrCFw6AjnS',NULL,'2020-01-22 11:02:25.773000','2020-01-31 14:01:15.217000','0899467737','331819521','[\"\\/storage\\/image\\/1\\/img2020013014161488976300.jpeg\",\"\\/storage\\/image\\/1\\/img2020013015235053326400.jpg\",\"\\/storage\\/image\\/1\\/img2020013015235055789900.jpg\"]','[\"\\/storage\\/image\\/1\\/img2020013014161489941900.jpeg\",\"\\/storage\\/image\\/1\\/img2020013014240671904900.jpeg\",\"\\/storage\\/image\\/1\\/img2020013014243133637200.jpeg\"]','[\"\\/storage\\/image\\/1\\/img2020013014161490401700.jpeg\",\"\\/storage\\/image\\/1\\/img2020013014243134465600.jpeg\"]',NULL,1),
(4,'User edit','user@user.com',NULL,'$2y$10$7LhUEHwuM1DA0ETmuwsYjOgQI9TMIPF/BJTR5pdLp.yBVUvGK8nju',NULL,'2020-01-27 10:00:53.317000','2020-01-27 13:23:39.247000','0899467737','331819521',NULL,NULL,NULL,NULL,3);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
