from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.

# this function will render the 'add a book' page
def add_book_page(request):

    context = {
        'all_books': Book.objects.all(),
    }

    return render(request, 'add-book-page.html', context)    

# this function will process the add a book form
# redirect to the book details page
def create_book(request):
    new_book = Book.objects.create(
        title = request.POST['title'],
        notes = request.POST['notes'],
    )

    id = new_book.id

    return redirect('/')
    # return redirect(f'/books/{id}')

# this function will render the book details page
def book_details_page(request, id):
    view_book = Book.objects.get(id=id)

    all_authors = Author.objects.all()
    available_authors = []
    for author in all_authors:
        if author not in view_book.authors.all():
            available_authors.append(author)
            return available_authors

    context = {
        'this_book': view_book,
        'available_authors': available_authors,
    }

    return render(request, 'book-details-page.html', context)