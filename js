import { LightningElement } from 'lwc';

export default class oportunidadeAtual extends LightningElement {
    visivel=false;
    recordId;
    
    handleSucess(event){
      this.visivel = true;
      this.recordId = event.detail.id;
    }
    apagar(){
      const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
      );
      if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
      }
      this.visivel = false;
    }
}
