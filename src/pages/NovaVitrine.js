import FormularioVitrine from "../components/FormularioVitrine";

const NovaVitrine = ({onSave}) => {
  return (
    <div>
      <h2>Criar nova vitrine</h2>
      <FormularioVitrine onSave={onSave} />
    </div>
  );
};

export default NovaVitrine;