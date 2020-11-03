puts"hello world"

print <<EOF
somthing
EOF

BEGIN{
    puts "this is my ruby"
}
END{
    puts "goodbye ruby"
}

class Sample
    def butts
       puts "im l3rning"
    end
 end
 
 # Now using above class to create objects
 object = Sample. new
 object.butts
