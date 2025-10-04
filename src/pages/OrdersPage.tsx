import { Package, Clock, CheckCircle, Truck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const productImages: { [key: string]: string } = {
  "Cold Brew Original":
    "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NTk0ODk1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "Green Tea Matcha":
    "https://images.unsplash.com/photo-1707722805784-fc3586908ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBiZXZlcmFnZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTk1ODI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "Fresh Orange Juice":
    "https://images.unsplash.com/photo-1652122788538-9aba111c550e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwYm90dGxlfGVufDF8fHx8MTc1OTU4Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "Espresso Blend":
    "https://images.unsplash.com/photo-1727908147383-7dc915d7feef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZXZlcmFnZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTk1ODI3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "Wellness Smoothie":
    "https://images.unsplash.com/photo-1504855232331-fe4d5d2febfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZHJpbmtzfGVufDF8fHx8MTc1OTU4Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "Classic Latte":
    "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NTk0ODk1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const productDetails: {
  [key: string]: { description: string; size: string };
} = {
  "Cold Brew Original": {
    description: "Smooth & bold coffee",
    size: "12 oz",
  },
  "Green Tea Matcha": {
    description: "Organic Japanese matcha",
    size: "12 oz",
  },
  "Fresh Orange Juice": {
    description: "Cold-pressed citrus",
    size: "16 oz",
  },
  "Espresso Blend": {
    description: "Rich & aromatic",
    size: "12 oz",
  },
  "Wellness Smoothie": {
    description: "Vitamin-packed blend",
    size: "16 oz",
  },
  "Classic Latte": {
    description: "Creamy & smooth",
    size: "12 oz",
  },
};

const orders = [
  {
    id: "ORD-2025-001",
    date: "October 2, 2025",
    status: "Delivered",
    total: 24.96,
    items: [
      { name: "Cold Brew Original", quantity: 2, price: 4.99 },
      { name: "Green Tea Matcha", quantity: 2, price: 5.49 },
      { name: "Fresh Orange Juice", quantity: 1, price: 6.99 },
    ],
  },
  {
    id: "ORD-2025-002",
    date: "October 3, 2025",
    status: "In Transit",
    total: 14.98,
    items: [
      { name: "Espresso Blend", quantity: 2, price: 4.49 },
      { name: "Wellness Smoothie", quantity: 1, price: 7.99 },
    ],
  },
  {
    id: "ORD-2025-003",
    date: "October 4, 2025",
    status: "Processing",
    total: 11.98,
    items: [
      { name: "Cold Brew Original", quantity: 1, price: 4.99 },
      { name: "Classic Latte", quantity: 1, price: 5.99 },
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case "In Transit":
      return <Truck className="w-5 h-5 text-blue-600" />;
    case "Processing":
      return <Clock className="w-5 h-5 text-yellow-600" />;
    default:
      return <Package className="w-5 h-5 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In Transit":
      return "bg-blue-100 text-blue-800";
    case "Processing":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function OrdersPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-2">My Orders</h1>
          <p className="text-muted-foreground">
            Track and manage your orders
          </p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div>{getStatusIcon(order.status)}</div>
                  <div>
                    <p className="text-muted-foreground">Order {order.id}</p>
                    <p className="text-muted-foreground">{order.date}</p>
                  </div>
                </div>
                <span
                  className={`px-4 py-2 rounded-full ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-6 mb-6">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={productImages[item.name]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="mb-1">{item.name}</h4>
                        <p className="text-muted-foreground mb-2">
                          {productDetails[item.name]?.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <span>Size: {productDetails[item.name]?.size}</span>
                          <span>Qty: {item.quantity}</span>
                          <span>${item.price.toFixed(2)} each</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <p>Total</p>
                  <p className="text-xl">${order.total.toFixed(2)}</p>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                    Track Order
                  </button>
                  <button className="flex-1 border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden when there are orders) */}
        {orders.length === 0 && (
          <div className="text-center py-20">
            <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">
              Start shopping to see your orders here
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Browse Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
