export default function CateringMenu() {
  return (
    <section id="catering-menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Our <span className="text-primary">Catering Menu</span>
          </h2>
          <p className="text-xl text-gray-600">Authentic Italian dishes perfect for any event</p>
        </div>
        
        {/* Pizza Catering Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Pizza Catering</h3>
          <p className="text-xl text-gray-600 text-center mb-8">Perfect for any group size - from small meetings to large events</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NY Style Pizza */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">New York Style</h4>
              <p className="text-gray-600 mb-4">Traditional thin crust pizza - perfect for sharing</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>10" (One Topping)</span>
                  <span className="font-semibold">$10</span>
                </div>
                <div className="flex justify-between">
                  <span>16" (One Topping)</span>
                  <span className="font-semibold">$18</span>
                </div>
                <div className="flex justify-between">
                  <span>18" (One Topping)</span>
                  <span className="font-semibold">$23</span>
                </div>
                <div className="flex justify-between">
                  <span>20" (One Topping)</span>
                  <span className="font-semibold">$27</span>
                </div>
                <div className="flex justify-between">
                  <span>24" (One Topping)</span>
                  <span className="font-semibold">$34</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">*Extra toppings: $1.00-$3.00 each</p>
            </div>
            
            {/* Chicago Style Pizza */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">Chicago Deep Dish</h4>
              <p className="text-gray-600 mb-4">Hearty deep dish pizza - a meal in itself</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>7" (One Topping)</span>
                  <span className="font-semibold">$20</span>
                </div>
                <div className="flex justify-between">
                  <span>13x9" (One Topping)</span>
                  <span className="font-semibold">$30</span>
                </div>
                <div className="flex justify-between">
                  <span>14" (One Topping)</span>
                  <span className="font-semibold">$33</span>
                </div>
              </div>
            
            </div>
            
            {/* Specialty Pizzas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">Specialty Pizzas</h4>
              <p className="text-gray-600 mb-4">Pre-designed combinations for easy ordering</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Meat Lovers</span>
                  <span className="font-semibold">+$4</span>
                </div>
                <div className="flex justify-between">
                  <span>Veggie Lovers</span>
                  <span className="font-semibold">+$3</span>
                </div>
                <div className="flex justify-between">
                  <span>Supreme</span>
                  <span className="font-semibold">+$4</span>
                </div>
                <div className="flex justify-between">
                  <span>BBQ Chicken</span>
                  <span className="font-semibold">+$6</span>
                </div>
                <div className="flex justify-between">
                  <span>Shrimp Alfredo</span>
                  <span className="font-semibold">+$7</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">*Add to any pizza size</p>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-4xl mx-auto">
            <h5 className="text-lg font-semibold text-yellow-800 mb-3">Pizza Catering Tips</h5>
            <ul className="space-y-2 text-yellow-700">
              <li>• <strong>Small groups (5-10 people):</strong> 2-3 large pizzas (18"-20")</li>
              <li>• <strong>Medium groups (10-20 people):</strong> 4-6 large pizzas (18"-20")</li>
              <li>• <strong>Large groups (20+ people):</strong> Mix of large pizzas and deep dish</li>
              <li>• <strong>Variety:</strong> Order a mix of NY style and deep dish for different preferences</li>
              <li>• <strong>Advance notice:</strong> Deep dish requires 45+ minutes cooking time</li>
            </ul>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Dishes */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-8">Main Dishes</h3>
            
            <div className="space-y-6">
              {/* Lasagna */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Homemade Lasagna</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$70.00</div>
                    <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-gray-600">Layers of pasta, meat sauce, and cheese</p>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$105.00</div>
                    <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
                  </div>
                </div>
              </div>

              {/* Chicken Alfredo */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Chicken Alfredo Pasta</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$60.00</div>
                    <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-gray-600">Creamy Alfredo sauce with grilled chicken</p>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$85.00</div>
                    <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
                  </div>
                </div>
              </div>

              {/* Shrimp Alfredo */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Shrimp Alfredo Pasta</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$65.00</div>
                    <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-gray-600">Creamy Alfredo sauce with succulent shrimp</p>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$95.00</div>
                    <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
                  </div>
                </div>
              </div>

              {/* Spaghetti & Meatballs */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Spaghetti & Meatballs</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$50.00</div>
                    <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-gray-600">Classic Italian comfort food</p>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$75.00</div>
                    <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Appetizers & Sides */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-8">Appetizers & Sides</h3>
            
            <div className="space-y-6">
              {/* Muffaletta */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Muffaletta</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$75.00</div>
                    <div className="text-sm text-gray-500">4 whole cut small</div>
                  </div>
                </div>
                <p className="text-gray-600">New Orleans style Italian sandwich</p>
              </div>

              {/* Fried Ravioli */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Fried Ravioli with Marinara</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$40.00</div>
                    <div className="text-sm text-gray-500">40 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Crispy breaded ravioli with marinara sauce</p>
              </div>

              {/* Chicken Tenders */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Chicken Tenders</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$50.00</div>
                    <div className="text-sm text-gray-500">50 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Crispy breaded chicken tenders</p>
              </div>

              {/* Chicken Wings */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Chicken Wings with Sauce</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$80.00</div>
                    <div className="text-sm text-gray-500">50 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Spicy or mild wings with your choice of sauce</p>
              </div>

              {/* Catfish Strips */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Catfish Strips</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$70.00</div>
                    <div className="text-sm text-gray-500">50 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Southern style catfish strips</p>
              </div>

              {/* Waffle Fries */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Waffle Fries</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$40.00</div>
                    <div className="text-sm text-gray-500">80 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Crispy waffle-cut potato fries</p>
              </div>

              {/* Pizza Beignets */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-dark">Pizza Beignets with Dipping Sauce</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">$40.00</div>
                    <div className="text-sm text-gray-500">40 pieces</div>
                  </div>
                </div>
                <p className="text-gray-600">Sweet pizza-flavored beignets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Salads Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Salads</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Caesar Salad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Caesar Salad</h4>
                <div className="text-lg font-bold text-primary">$25.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$45.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* Italian Salad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Italian Salad</h4>
                <div className="text-lg font-bold text-primary">$35.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$55.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* House Salad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">House Salad</h4>
                <div className="text-lg font-bold text-primary">$25.00</div>
                <div className="text-sm text-gray-500">Small (feeds 9)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$58.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Beverages */}
        <div className="mt-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Beverages</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Gallon Iced Tea</h4>
                <div className="text-lg font-bold text-primary">$8.00</div>
                <div className="text-sm text-gray-500">Serves approximately 16 people</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
