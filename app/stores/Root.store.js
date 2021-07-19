import ConfiguracaoHorarioAtendimentoStore from './ConfiguracaoHorarioAtendimento.store';
import LoginStore from './Login.store';
import AtendimentoStore from "./Atendimento.store"
import ProntuarioStore from "./Prontuario.store";
import UsuarioStore from "./Usuario.store";
import FiltroHeaderStore from './FiltroHeader.store';
import ProfissionalSaudeStore from './ProfissionalSaude.store';
import ContaBancariaStore from './Financeiro/ContaBancaria.store';
import CentroDeCusto from './Financeiro/CentroDeCusto.store';
import CategoriaFinanceiraStore from './Financeiro/CategoriaFinanceira.store';
import ExtratoStore from './Financeiro/Extrato.store';
import ChatStore from './Chat.store';
import RecuperarSenhaStore from "./RecuperarSenha.store";
import ConfiguracaoImpressaoStore from './ConfiguracaoImpressaoStore';
import MedicamentoPersonalizadoStore from './MedicamentoPersonalizado.store';
import ConvenioStore from './Convenio.store';

class RootStores {

    constructor() {
        this.usuarioStore = new UsuarioStore();
        this.configuracaoHorarioAtendimentoStore = new ConfiguracaoHorarioAtendimentoStore();
        this.medicamentoPersonalizadoStore = new MedicamentoPersonalizadoStore();
        this.chatStore = new ChatStore();
        this.atendimentoStore = new AtendimentoStore();
        this.recuperarSenhaStore = new RecuperarSenhaStore();
        this.loginStore = new LoginStore(this);
        this.profissionalSaudeStore = new ProfissionalSaudeStore();
        this.prontuarioStore = new ProntuarioStore(this);
        this.filtroHeaderStore = new FiltroHeaderStore();
        this.configuracaoImpressaoStore = new ConfiguracaoImpressaoStore(this);
        this.convenioStore = new ConvenioStore();

        this.contaBancariaStore = new ContaBancariaStore();
        this.centroDeCustoStore = new CentroDeCusto();
        this.categoriaFinanceiraStore = new CategoriaFinanceiraStore();
        this.extratoStore = new ExtratoStore();
        
        this.contaBancariaStore.usuarioStore = this.usuarioStore;
        
        this.centroDeCustoStore.usuarioStore = this.usuarioStore;
        
        this.categoriaFinanceiraStore.usuarioStore = this.usuarioStore;
        
        this.extratoStore.usuarioStore = this.usuarioStore;
        this.medicamentoPersonalizadoStore.usuarioStore = this.usuarioStore;
        
        this.filtroHeaderStore.usuarioStore = this.usuarioStore;
        this.filtroHeaderStore.profissionalSaudeStore = this.profissionalSaudeStore;
        
        this.atendimentoStore.prontuarioStore = this.prontuarioStore;
        this.atendimentoStore.filtroHeaderStore = this.filtroHeaderStore;
        
        this.configuracaoHorarioAtendimentoStore.filtroHeaderStore = this.filtroHeaderStore;
        
        this.loginStore.filtroHeaderStore = this.filtroHeaderStore;
    }
}

export default new RootStores();
