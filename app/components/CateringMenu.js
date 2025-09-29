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
        
        {/* Salads Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Salads</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Caesar Salad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Caesar Salad</h4>
                <div className="text-lg font-bold text-primary">$30.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$55.00</div>
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
                <div className="text-lg font-bold text-primary">$60.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* House Salad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">House Salad</h4>
                <div className="text-lg font-bold text-primary">$30.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$55.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dishes Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Main Dishes</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lasagna */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Homemade Lasagna</h4>
                <div className="text-lg font-bold text-primary">$70.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$120.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* Chicken Alfredo */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Chicken Alfredo Pasta</h4>
                <div className="text-lg font-bold text-primary">$65.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$95.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* Shrimp Alfredo */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Shrimp Alfredo Pasta</h4>
                <div className="text-lg font-bold text-primary">$75.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$115.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* Spaghetti & Meatballs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Spaghetti & Meatballs</h4>
                <div className="text-lg font-bold text-primary">$55.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$85.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>

            {/* Jambalaya */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Jambalaya</h4>
                <div className="text-lg font-bold text-primary">$65.00</div>
                <div className="text-sm text-gray-500">Small (feeds 8-10)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$130.00</div>
                <div className="text-sm text-gray-500">Large (feeds 15-20)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Appetizers & Sides Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Appetizers & Sides</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chicken Tenders */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Chicken Tenders</h4>
                <div className="text-lg font-bold text-primary">$40.00</div>
                <div className="text-sm text-gray-500">25 pieces</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$75.00</div>
                <div className="text-sm text-gray-500">50 pieces</div>
              </div>
            </div>

            {/* Chicken Wings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Chicken Wings with Sauce</h4>
                <div className="text-lg font-bold text-primary">$65.00</div>
                <div className="text-sm text-gray-500">50 pieces</div>
              </div>
            </div>

            {/* Burger Sliders */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Burger Sliders</h4>
                <div className="text-lg font-bold text-primary">$70.00</div>
                <div className="text-sm text-gray-500">25 pieces</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$140.00</div>
                <div className="text-sm text-gray-500">50 pieces</div>
              </div>
            </div>

            {/* Muffaletta */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Muffaletta</h4>
                <div className="text-lg font-bold text-primary">$75.00</div>
                <div className="text-sm text-gray-500">4 whole cut small</div>
              </div>
            </div>

            {/* Finger Sandwich Tray */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Finger Sandwich Tray</h4>
                <div className="text-lg font-bold text-primary">$50.00</div>
                <div className="text-sm text-gray-500">50 pieces (Ham, Turkey, Roast Beef)</div>
              </div>
            </div>

            {/* Mini Poboy Tray */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Mini Poboy Tray</h4>
                <div className="text-lg font-bold text-primary">$50.00</div>
                <div className="text-sm text-gray-500">25 pieces (Ham, Turkey, Roast Beef)</div>
              </div>
            </div>

            {/* Fried Ravioli */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Fried Ravioli with Marinara</h4>
                <div className="text-lg font-bold text-primary">$45.00</div>
                <div className="text-sm text-gray-500">40 pieces</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$80.00</div>
                <div className="text-sm text-gray-500">80 pieces</div>
              </div>
            </div>

            {/* Fried/Grilled Shrimp */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Fried or Grilled Shrimp</h4>
                <div className="text-lg font-bold text-primary">$60.00</div>
                <div className="text-sm text-gray-500">50 pieces</div>
              </div>
            </div>

            {/* Catfish Strips */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Catfish Strips</h4>
                <div className="text-lg font-bold text-primary">$50.00</div>
                <div className="text-sm text-gray-500">40 pieces</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$90.00</div>
                <div className="text-sm text-gray-500">80 pieces</div>
              </div>
            </div>

            {/* Pizza Beignets */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Pizza Beignets with Dipping Sauce</h4>
                <div className="text-lg font-bold text-primary">$35.00</div>
                <div className="text-sm text-gray-500">Small (9 pieces)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$60.00</div>
                <div className="text-sm text-gray-500">Large (15 pieces)</div>
              </div>
            </div>

            {/* Waffle Fries */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Waffle Fries</h4>
                <div className="text-lg font-bold text-primary">$15.00</div>
                <div className="text-sm text-gray-500">Small</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">$30.00</div>
                <div className="text-sm text-gray-500">Large</div>
              </div>
            </div>

            {/* Garlic French Bread */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Loaf Garlic French Bread</h4>
                <div className="text-lg font-bold text-primary">$9.00</div>
                <div className="text-sm text-gray-500">Per loaf</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desserts Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Desserts</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Whole Cheesecake */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Whole Cheesecake</h4>
                <div className="text-lg font-bold text-primary">$95.00</div>
                <div className="text-sm text-gray-500">12 slices</div>
              </div>
            </div>

            {/* Whole Tiramisu */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Whole Tiramisu</h4>
                <div className="text-lg font-bold text-primary">$90.00</div>
                <div className="text-sm text-gray-500">35 squares</div>
              </div>
            </div>

            {/* Warm Chocolate Chip Cookies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Warm Chocolate Chip Cookies</h4>
                <div className="text-lg font-bold text-primary">$25.00</div>
                <div className="text-sm text-gray-500">25 pieces</div>
              </div>
            </div>
          </div>
        </div>

        {/* Beverages Section */}
        <div className="mb-16">
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
