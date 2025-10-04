import { useState } from "react";
import { User, Mail, Phone, MapPin, Save } from "lucide-react";

export function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-2">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your account information
          </p>
        </div>

        {/* Profile Avatar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h2>
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-muted-foreground">{formData.email}</p>
              <button className="mt-2 text-primary hover:text-primary/80 transition-colors">
                Change Photo
              </button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h3>Personal Information</h3>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-muted-foreground">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 text-muted-foreground">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div>
              <label className="block mb-2 text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 text-muted-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
              />
            </div>

            {/* Address Section */}
            <div className="pt-6 border-t border-gray-100">
              <h4 className="mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Shipping Address
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-muted-foreground">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-2 text-muted-foreground">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-muted-foreground">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-muted-foreground">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-muted-foreground">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-muted-foreground transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mt-6">
          <h3 className="mb-6">Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <span>Email notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>Marketing updates</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>Order status updates</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
