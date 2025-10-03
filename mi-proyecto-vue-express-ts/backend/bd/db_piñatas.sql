CREATE TABLE `empleados`(
    `id_empleado` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_empleado` VARCHAR(255) NOT NULL,
    `apellido_empleado` VARCHAR(255) NOT NULL
);
CREATE TABLE `sizes`(
    `id_size` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `size` VARCHAR(255) NOT NULL
);
CREATE TABLE `productos`(
    `id_producto` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_producto` VARCHAR(255) NOT NULL,
    `id_size` INT NOT NULL,
    `id_pico` INT NOT NULL,
    `precio` FLOAT(53) NOT NULL
);
CREATE TABLE `picos`(
    `id_pico` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_picos` VARCHAR(255) NOT NULL
);
CREATE TABLE `movimientos`(
    `id_movimiento` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_empleado` INT NOT NULL,
    `fecha` DATE NOT NULL,
    `id_producto` INT NOT NULL,
    `cantidad` INT NOT NULL
);
ALTER TABLE
    `productos` ADD CONSTRAINT `productos_id_size_foreign` FOREIGN KEY(`id_size`) REFERENCES `sizes`(`id_size`);
ALTER TABLE
    `productos` ADD CONSTRAINT `productos_id_pico_foreign` FOREIGN KEY(`id_pico`) REFERENCES `picos`(`id_pico`);
ALTER TABLE
    `movimientos` ADD CONSTRAINT `movimientos_id_empleado_foreign` FOREIGN KEY(`id_empleado`) REFERENCES `empleados`(`id_empleado`);
ALTER TABLE
    `movimientos` ADD CONSTRAINT `movimientos_id_producto_foreign` FOREIGN KEY(`id_producto`) REFERENCES `productos`(`id_producto`);