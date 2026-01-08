import { settings } from './settings';
import StyledContent from '../../components/styledContent/StyledContent';
import './legal.scss';

const PrivacyPolicy = () => {
  return (
    <div id="legal-page">
      <StyledContent title="privacy policy">
        <div className="mb-4">
          <p><strong>Responsable del tratamiento:</strong></p>
          <ul>
            {settings?.companyName && <li><p>Nombre comercial: {settings.companyName}</p></li>}
            {settings?.companyName && <li><p>Razón social: {settings.contactPerson}</p></li>}
            {settings?.companyNIF && <li><p>VAT number: {settings.companyNIF}</p></li>}
            {settings?.location && <li><p>Dirección: {settings.location}</p></li>}
            {settings?.email && <li><p>Correo electrónico: {settings.email}</p></li>}
          </ul>
        </div>

        <div className="mb-4"><p><strong>Datos personales recogidos:</strong></p>
          <p>A través del formulario de contacto se recogen los siguientes datos:</p>
          <ul>
            <li><p>Nombre: Nombre del usuario</p></li>
            <li><p>Dirección de correo electrónico: Email del usuario</p></li>
            <li><p>Mensaje: Mensaje del usuario</p></li>
          </ul>
        </div>

        <p className="mb-4"><strong>Finalidad del tratamiento:</strong><br/>
          Los datos se utilizan exclusivamente para atender consultas, solicitudes de información
          o contactos profesionales realizados por el usuario.</p>

        <p className="mb-4"><strong>Legitimación:</strong><br/>
          La base legal para el tratamiento de los datos es el consentimiento expreso del usuario,
          otorgado mediante la aceptación de la presente política de privacidad.</p>

        <p className="mb-4"><strong>Conservación de los datos:</strong><br/>
          Los datos se conservarán únicamente durante el tiempo necesario para atender la consulta
          y mientras puedan derivarse responsabilidades legales.</p>

        <p className="mb-4"><strong>Destinatarios:</strong><br/>
          No se cederán datos a terceros, salvo obligación legal.
          Los datos podrán ser tratados por proveedores de servicios necesarios para el funcionamiento
          del sitio web (hosting, correo electrónico), bajo contratos de confidencialidad.</p>

        <p className="mb-4"><strong>Derechos del usuario:</strong><br/>
          El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
          limitación y portabilidad enviando una solicitud al correo electrónico indicado. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección
          de Datos (www.aepd.es).</p>

        <p className="mb-4"><strong>Seguridad:</strong><br/>
          El titular adopta las medidas técnicas y organizativas necesarias para garantizar la
          seguridad de los datos personales.
        </p>
      </StyledContent>
    </div>
  )
}

export default PrivacyPolicy;
