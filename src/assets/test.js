const XLSX = require("xlsx");
const fs = require("fs");

// Función para crear un archivo .xlsm con una tabla y agregar filas dinámicamente
function createExcelFile() {
  // Crear un libro de trabajo
  const workbook = XLSX.utils.book_new();

  // Crear una hoja de trabajo con las cabeceras de la tabla
  const headers = ["Ambiente", "Cantidad de IDC", "Sucursal", "Crear Persona", "Tipo de Persona", "Tipo de Doc.", "Número Del Doc", "CIC", "Apellido Paterno", "Apellido Materno", "Nombres", "Telefono", "Correo", "Cuentas de Ahorros Soles", "Cuentas de Ahorros dolares", "Cuentas CTS soles", "Cuentas CTS dolares", "Cuentas Corriente Ordinaria Soles", "Cuentas Corriente Ordinaria Dolares", "Abono en Cuenta Importe", "Tipo Cuenta", "Cuenta Abonar", "Moneda Cuenta"];
  const data = [headers]; // Inicialmente solo las cabeceras

  // Crear la hoja de trabajo
  const worksheet = XLSX.utils.aoa_to_sheet(data);

  // Definir el rango de la tabla (inicialmente solo las cabeceras)
  worksheet["!ref"] = "A1:W1"; // Rango inicial de la tabla

  // Agregar un rango nombrado para simular la tabla
  workbook.Workbook = {
    Names: [
      {
        Name: "Tabla1",
        Ref: "'Hoja1'!A1:W1", // Rango inicial de la tabla
      },
    ],
  };

  // Agregar la hoja al libro de trabajo
  XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja1");

  // Guardar el archivo como .xlsm
  const filePath = "./output.xlsm";
  XLSX.writeFile(workbook, filePath);

  console.log(`Archivo creado en: ${filePath}`);
}

// Función para agregar una fila a la tabla existente
function addRowToExcel(row) {
  const filePath = "./output.xlsm";

  // Leer el archivo existente
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets["Hoja1"];

  // Convertir la hoja a un arreglo de arreglos
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Agregar la nueva fila
  data.push(row);

  // Actualizar la hoja de trabajo
  const updatedWorksheet = XLSX.utils.aoa_to_sheet(data);

  // Actualizar el rango de la tabla
  const numRows = data.length;
  updatedWorksheet["!ref"] = `A1:W${numRows}`; // Ajustar el rango según las filas

  // Actualizar el rango nombrado
  workbook.Workbook.Names[0].Ref = `'Hoja1'!A1:W${numRows}`;

  workbook.Sheets["Hoja1"] = updatedWorksheet;

  // Guardar los cambios
  XLSX.writeFile(workbook, filePath);

  console.log("Fila agregada:", row);
}

// Crear el archivo inicial
createExcelFile();

// Agregar filas dinámicamente
addRowToExcel(["Desarrollo", "1", "", "Crear", "Natural", "DNI", "", "", "", "", "", "987654321", "uncorreo@mail.com", "Crear", "Crear", "Crear", "Crear", "Crear", "Crear", "", "", "", ""]);
addRowToExcel(["Desarrollo", "1", "", "Crear", "Natural", "DNI", "", "", "", "", "", "987654321", "uncorreo2@mail.com", "Crear", "Crear", "Crear", "Crear", "Crear", "Crear", "", "", "", ""]);
//addRowToExcel(["Desarrollo", "Recibo", 67890, "María López"]);

// Función para convertir el archivo .xlsm a JSON y guardarlo en un archivo .json
function convertExcelToJson() {
    const filePath = "./output.xlsm";
    const outputJsonPath = "./output.json";

    // Leer el archivo existente
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets["Hoja1"];

    // Convertir la hoja a JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

    // Guardar el JSON en un archivo
    fs.writeFileSync(outputJsonPath, JSON.stringify(jsonData, null, 2), "utf8");

    console.log(`Datos convertidos a JSON y guardados en: ${outputJsonPath}`);

    return jsonData;
}

// Llamar a la función para convertir el archivo a JSON y guardarlo
const jsonOutput = convertExcelToJson();