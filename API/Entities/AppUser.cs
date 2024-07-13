namespace API.Entities;

public class AppUser //represents database, not a database name
{
    public int Id { get; set; } // actual columns in database

    public string UserName { get; set; }

    public byte[] PasswordHash { get; set; }

    public byte[] PasswordSalt { get; set; }
}
