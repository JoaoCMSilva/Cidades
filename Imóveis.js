
class Imóveis {

	constructor() {
		this.coleção = new Array();
		this.coleção.push(new Imóvel("Rua do Olival", 40, "Lisboa", 1200, 739, 75000));
		this.coleção.push(new Imóvel("Travessa da Azeitona", 75, "Lisboa", 1300, 350, 175000));
		this.coleção.push(new Imóvel("Praça do Calvário", 33, "Porto", 2200, 301, 99000));
	}

	procurarEm(cidade) {
		var imóvel;
		var colecaoCidades = new Array();
		var número = this.coleção.length;
		while (número-- !== 0) {
			var imóvel = this.coleção[número];
			if (imóvel.em(cidade))
				colecaoCidades.push(imóvel);
		}
		return colecaoCidades; 
	}

}

