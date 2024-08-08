class Product{
    constructor(name,description,price,discount,new_price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
        this.discount = discount
        this.new_price = new_price

    }

    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(discount){
        this.new_price = this.price - (this.price * discount / 100)
        this.discount = discount

        console.log(`
            Nome do produto: ${this.name}
            Descrição do produto: ${this.description}
            Valor do produto: ${this.price}
            Quantidade no estoque: ${this.inStock}
            ==================================
            Desconto no produto: ${this.discount}
            Novo valor do produto: ${this.new_price}
        `)
    }
}

const nitro5 = new Product(
    'Notebook',
    'Notebook Nitro 5',
    1000
)
nitro5.addToStock(10)
nitro5.calculateDiscount(5)

