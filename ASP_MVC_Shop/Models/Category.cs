using System.Net.Http.Headers;

namespace ASP_MVC_Shop.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public ICollection<Product>? Products { get; set; }


        public Category()
        {
            Products = new List<Product>();
        }
    }
}
