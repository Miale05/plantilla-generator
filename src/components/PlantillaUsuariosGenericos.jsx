import React, { useState } from "react";

const PlantillaUsuariosGenericos = () => {
  const [formData, setFormData] = useState({
    Ambiente: "",
    CantidadIDC: "",
    Sucursal: "",
    CrearPersona: "",
    TipoPersona: "",
    TipoDoc: "",
    NumeroDelDoc: "",
    CIC: "",
    ApellidoPaterno: "",
    ApellidoMaterno: "",
    Nombres: "",
    Telefono: "",
    Correo: "",
    CuentasAhorrosSoles: "",
    CuentasAhorrosDolares: "",
    CuentasCTSSoles: "",
    CuentasCTSDolares: "",
    CuentasCorrienteOrdinariaSoles: "",
    CuentasCorrienteOrdinariaDolares: "",
    AbonoEnCuentaImporte: "",
    TipoCuenta: "",
    CuentaAbonar: "",
    MonedaCuenta: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecord = () => {
    setRecords([...records, Object.values(formData)]);
    setFormData({
      Ambiente: "",
      CantidadIDC: "",
      Sucursal: "",
      CrearPersona: "",
      TipoPersona: "",
      TipoDoc: "",
      NumeroDelDoc: "",
      CIC: "",
      ApellidoPaterno: "",
      ApellidoMaterno: "",
      Nombres: "",
      Telefono: "",
      Correo: "",
      CuentasAhorrosSoles: "",
      CuentasAhorrosDolares: "",
      CuentasCTSSoles: "",
      CuentasCTSDolares: "",
      CuentasCorrienteOrdinariaSoles: "",
      CuentasCorrienteOrdinariaDolares: "",
      AbonoEnCuentaImporte: "",
      TipoCuenta: "",
      CuentaAbonar: "",
      MonedaCuenta: "",
    });

    console.log(formData);
  };

  const handleEditRecord = (index) => {
    setFormData(
      Object.fromEntries(
        Object.keys(formData).map((key, i) => [key, records[index][i]])
      )
    );
    handleDeleteRecord(index);
  };

  const handleDeleteRecord = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

return (
    <div className="mt-4">
        <form className="row g-4">
            <div className="col-3">
                <label>Ambiente:</label>
                <select
                    className="form-select"
                    name="Ambiente"
                    value={formData.Ambiente}
                    onChange={handleChange}
                    required
                >
                    <option value="">--select--</option>
                    <option value="Desarrollo">Desarrollo</option>
                    <option value="Certificación">Certificación</option>
                </select>
            </div>
            <div className="col-3">
                <label>Tipo Persona:</label>
                <select
                    className="form-select"
                    name="TipoPersona"
                    value={formData.TipoPersona}
                    onChange={handleChange}
                    required
                >
                    <option value="">--select--</option>
                    <option value="Natural">Natural</option>
                    <option value="Jurídico">Jurídico</option>
                </select>
            </div>
            <div className="col-3">
                <label>Tipo Documento:</label>
                <select
                    className="form-select"
                    name="TipoDoc"
                    value={formData.TipoDoc}
                    onChange={handleChange}
                    required
                >
                    <option value="">--select--</option>
                    {formData.TipoPersona === "Natural" && (
                        <>
                            <option value="DNI">DNI</option>
                            <option value="CE">CE</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </>
                    )}
                    {formData.TipoPersona === "Jurídico" && (
                        <option value="RUC">RUC</option>
                    )}
                </select>
            </div>
            <div className="col-3">
                <label>Cantidad de IDC:</label>
                <input
                    type="number"
                    className="form-control"
                    name="CantidadIDC"
                    value={formData.CantidadIDC}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Ejm: 1"
                />
            </div>
            <div className="col-3">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasAhorrosSoles"
                    checked={formData.CuentasAhorrosSoles === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasAhorrosSoles: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasAhorrosSoles">
                    Cuentas Ahorros Soles
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasAhorrosDolares"
                    checked={formData.CuentasAhorrosDolares === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasAhorrosDolares: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasAhorrosDolares">
                    Cuentas Ahorros Dolares
                </label>
            </div>
            </div>
            <div className="col-3">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasCTSSoles"
                    checked={formData.CuentasCTSSoles === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasCTSSoles: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasCTSSoles">
                    Cuentas CTS Soles
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasCTSDolares"
                    checked={formData.CuentasCTSDolares === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasCTSDolares: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasCTSDolares">
                    Cuentas CTS Dolares
                </label>
            </div>
            </div>
            <div className="col-3">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasCorrienteOrdinariaSoles"
                    checked={formData.CuentasCorrienteOrdinariaSoles === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasCorrienteOrdinariaSoles: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasCorrienteOrdinariaSoles">
                    Cuentas Corriente Soles
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkCuentasCorrienteOrdinariaDolares"
                    checked={formData.CuentasCorrienteOrdinariaDolares === "Crear"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            CuentasCorrienteOrdinariaDolares: e.target.checked ? "Crear" : "",
                        })
                    }
                />
                <label className="form-check-label" htmlFor="checkCuentasCorrienteOrdinariaDolares">
                    Cuentas Corriente Dolares
                </label>
            </div>
            </div>

            <button
                type="button"
                onClick={handleAddRecord}
                disabled={
                    !formData.Ambiente ||
                    !formData.TipoPersona ||
                    !formData.TipoDoc ||
                    !formData.CantidadIDC
                }
            >
                Add Record
            </button>
        </form>
        <hr />
        <div className="mt-3">
            <h3>Registros</h3>
            {records.map((record, index) => (
                <div className="mt-3" key={index}>
                    <button className="btn btn-info me-2" onClick={() => handleEditRecord(index)}>Edit</button>
                    <button className="btn btn-danger me-3" onClick={() => handleDeleteRecord(index)}>Delete</button>
                    <span>
                        Ambiente: {record[0]}, Cantidad IDC: {record[1]}, Tipo Persona: {record[4]}, Tipo Documento: {record[5]}
                    </span>
                </div>
            ))}
        </div>
    </div>
);
};

export default PlantillaUsuariosGenericos;
